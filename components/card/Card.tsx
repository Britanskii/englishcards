import s from "./card.module.sass"
import Dropdown from "../dropdown/Dropdown";
import {motion, AnimatePresence, PanInfo, useTransform, useMotionValue} from "framer-motion"
import {useState} from "react";
import {AntonymI, ExampleI, SynonymousI, WordI} from "../../interfaces/interfaces";
import {getRandomIntenger} from "../../functions/randomNumber";

export interface CardProps {
    activeCard: number,
    id: number,
    animationKey: number,
    length: number,
    onIKnow: (number: number) => void,
    onIDontKnow: () => void,
    word: WordI,
    antonym: AntonymI
    synonymous: SynonymousI
    image: string
    examples: ExampleI[]
}

const Card = ({
                  word,
                  image,
                  antonym,
                  synonymous,
                  examples,
                  activeCard,
                  id,
                  onIKnow,
                  onIDontKnow,
                  animationKey,
                  length
              }: CardProps) => {

    const [answer, setAnswer] = useState(false)
    const [activeImg, setActiveImg] = useState(false)
    const sensitivity = 125

    const x = useMotionValue(0)

    const rotate = useTransform(
        x,
        [0, 100],
        [0, 5],
        {clamp: false}
    )

    const backgroundNo = useTransform(
        x,
        [-100, 0, 100],
        ["#dc7373", "#dc7373", "#ff0000"]
    )

    const backgroundYes = useTransform(
        x,
        [-100, 0, 100],
        ["rgb(24,255,0)", "#7edc73", "#7edc73"]
    )

    const onToggleActiveImg = () => {
        setActiveImg(activeImg => activeImg = !activeImg)
    }

    const onAnswer = () => {
        setActiveImg(true)
        setAnswer(true)
    }

    const onDragEnd = (event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
        const x = info.offset.x

        if (x > sensitivity) {
            onIDontKnow()
        } else if (x < -sensitivity) {
            onIKnow(id)
        }

        setAnswer(false)
        setActiveImg(false)
    }

    return (
        <motion.div className={s.card}
                    key={animationKey}
                    drag={"x"}
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    exit={{opacity: 0}}
                    dragConstraints={{left: 0, right: 0}}
                    onDragEnd={onDragEnd}
                    style={{x, rotate}}
        >
            <div className={s.card__head}>
                <img onClick={onToggleActiveImg}
                     className={`${s.card__img} ${activeImg ? "" : s.card__img_disabled}`}
                     src={image} alt={word.proposal}/>
                <div className={s.card__word}>
                    {word.proposal} — <span className={s.card__synonymous}>{synonymous.proposal}</span> — <span
                    className={s.card__antonym}>{antonym.proposal}</span>
                </div>
            </div>
            <div className={s.card__line}/>
            <div className={`${s.card__body} ${answer ? s.card__body_active : ""}`}>
                <div onClick={onAnswer} className={s.card__visible}>
                    Посмотреть
                </div>
                <div className={s.card__answer}>
                    <div className={s.card__capitalize}>{word.translated} — <span
                        className="synonymous">{synonymous.translated}</span> — <span
                        className="antonym">{antonym.translated}</span></div>
                    <div className={s.card__examples}>
                        {examples.map((example, id) => {
                            return <Dropdown
                                key={id}
                                text={example.proposal}
                                lowerText={example.translated}/>
                        })}
                    </div>
                </div>
            </div>
            <div className={s.card__bottom}>
                <motion.div className={`${s.card__know} ${s.card__know_yes}`}
                            style={{background: backgroundYes}}>
                    Я знаю
                </motion.div>
                <motion.div className={`${s.card__know} ${s.card__know_no}`}
                            style={{background: backgroundNo}}>
                    Я не знаю
                </motion.div>
            </div>
        </motion.div>
    )
}

export default Card