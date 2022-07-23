import s from "./card.module.sass"
import Dropdown from "../dropdown/Dropdown"
import {motion, PanInfo, useTransform, useMotionValue} from "framer-motion"
import {Dispatch, SetStateAction, useState} from "react"
import {AntonymI, CardI, ExampleI, SynonymousI, WordI} from "../../interfaces"
import {variants} from "../../animtaion/card"

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
    examples: ExampleI[],
    arrayCards: CardI[]
}

const Card = ({
                  word,
                  image,
                  antonym,
                  synonymous,
                  examples,
                  id,
                  onIKnow,
                  onIDontKnow,
                  animationKey,
                  arrayCards
              }: CardProps) => {
    const [answer, setAnswer] = useState(false)
    const [activeImg, setActiveImg] = useState(false)
    const [activeSynonymous, setActiveSynonymous] = useState(false)
    const [activeAntonym, setActiveAntonym] = useState(false)
    const [animate, setAnimate] = useState("mount")

    const sensitivity = 125

    const x = useMotionValue(0)

    const rotate = useTransform(
        x,
        [0, 35],
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
        ["#18FF00", "#7edc73", "#7edc73"]
    )

    const onToggleActiveImg = () => {
        setActiveImg(activeImg => activeImg = !activeImg)
    }

    const onAnswer = () => {
        setActiveImg(true)
        setAnswer(true)
        setActiveAntonym(true)
        setActiveSynonymous(true)
    }

    const onDragEnd = (event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
        const x = info.offset.x

        if (x > sensitivity) {
            if (arrayCards.length > 1) {
                onIDontKnow()
                setAnimate("onRight")
                setAnswer(false)
                setActiveImg(false)
            }
        } else if (x < -sensitivity) {
            onIKnow(id)
            setAnimate("onLeft")
            setAnswer(false)
            setActiveImg(false)
        }
    }

    const onToggle = (setter: Dispatch<SetStateAction<boolean>>) => {
        setter((isBool: boolean) => isBool = !isBool)
    }

    const onToggleSynonymous = () => {
        onToggle(setActiveSynonymous)
    }

    const onToggleAntonym = () => {
        onToggle(setActiveAntonym)
    }

    return (
        <motion.div className={s.card}
                    key={animationKey}
                    drag={"x"}
                    transition={{
                        duration: 0.35,
                        ease: "easeIn"
                    }}
                    variants={variants}
                    initial={{opacity: 0}}
                    animate={animate}
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
                    {word.proposal}
                    {synonymous.proposal &&
					<>
						<span> — </span>
						<span onClick={onToggleSynonymous}
						      className={`${s.card__synonymous} ${activeSynonymous ? "" : s.blur}`}>
                            {synonymous.proposal}
                        </span>
					</>}
                    {antonym.proposal &&
					<>
						<span> — </span>
						<span onClick={onToggleAntonym} className={`${s.card__antonym} ${activeAntonym ? "" : s.blur}`}>
                            {antonym.proposal}
                        </span>
					</>}
                </div>
            </div>
            <div className={s.card__line}/>
            <div className={`${s.card__body} ${answer ? s.card__body_active : ""}`}>
                <div onClick={onAnswer} className={s.card__visible}>
                    ПОСМОТРЕТЬ
                    {/* <Image src={"/eye.svg"} className={s.card__eye}/> */}
                </div>
                <div className={s.card__answer}>
                    <div className={s.card__capitalize}>{word.translated}
                        {synonymous.translated &&
						<> — <span
							className="synonymous">{synonymous.translated}</span>
						</>}
                        {antonym.translated &&
						<> — <span
							className="antonym">{antonym.translated}</span>
						</>}
                    </div>

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
