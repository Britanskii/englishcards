import s from "./learn.module.sass"
import {CardI} from "../../interfaces"
import {useEffect, useState} from "react"
import {AnimatePresence} from "framer-motion"
import Progress from "../../components/progress/Progress"
import {getRandomIntenger} from "../../functions/randomNumber"
import Card from "../../components/card/Card"
import Complete from "./complete/Complete"
import useTypedSelector from "../../hooks/useTypedSelector"
import useActions from "../../hooks/useActions"
import {LearnSelected, LearnType} from "../../store/types/types"
import {deleteMistakesWord} from "../../store/actionCreators/mistakes"

interface LearnProps {
    selected: LearnSelected
}

const Learn = (props: LearnProps) => {

    const {setWords, setStateWords, addMistakesWord, deleteMistakesWord} = useActions()

    const {words, stateWords} = useTypedSelector(state => state.dictionary)
    const mistakes = useTypedSelector(state => state.mistakes)

    const [arrayCards, setArrayCards] = useState<CardI[]>([])
    const [maxCards, setMaxCards] = useState<number>(0)
    const [activeCard, setActiveCard] = useState(0)
    const [isAll, setIsAll] = useState(false)

    const getCardRandomId = (array: CardI[]) => array[getRandomIntenger(0, array.length)].id

    const onIKnow = (id: number) => {

        if (props.selected.type === LearnType.MISTAKES) {
            const activeCard = arrayCards.find(card => card.id === id)

            deleteMistakesWord(activeCard!)
        }

        if (arrayCards !== undefined) {
            const newArrayCards = arrayCards.filter((card) => card.id !== id)

            if (newArrayCards.length > 0) setActiveCard(newArrayCards[getRandomIntenger(0, newArrayCards.length)].id)
            setStateWords(newArrayCards)
            setArrayCards(newArrayCards)
            if (newArrayCards.length === 0) setIsAll(true)
        }
    }

    const onIDontKnow = () => {
        if (props.selected.type !== LearnType.MISTAKES) {
            addMistakesWord(arrayCards[activeCard], mistakes.words)
        }

        let id = getCardRandomId(arrayCards)

        if (arrayCards.length > 1) {
            while (id === activeCard) {
                id = getCardRandomId(arrayCards)
            }
        }

        setActiveCard(id)
    }


    useEffect(() => {
        if (props.selected.type === LearnType.ID) {
            const words = props.selected.dictionary!.words

            setMaxCards(words.length)
            setWords(words)
            setStateWords(words)
            setArrayCards(words)
            setActiveCard(getCardRandomId(words))
        } else if (props.selected.type === LearnType.IDLE) {
            setMaxCards(words.length)
            setArrayCards(stateWords!)
            if (stateWords!.length > 0) {
                setActiveCard(getCardRandomId(stateWords!))
            } else {
                setIsAll(true)
            }
        } else if (props.selected.type === LearnType.MISTAKES) {
            setMaxCards(mistakes.words.length)
            setArrayCards(mistakes.stateWords!)
            setWords(mistakes.words)
            setStateWords(mistakes.words)
            if (mistakes.stateWords!.length > 0) {
                setActiveCard(getCardRandomId(mistakes.stateWords!))
            } else {
                setIsAll(true)
            }
        }
    }, [])

    return (
        <div className={s.learn}>
            <div className={s.learn__progress}>
                Повторено слов {maxCards - arrayCards.length}/{maxCards}
                <Progress to={maxCards} progress={arrayCards.length}/>
            </div>
            <div className={s.learn__cards}>
                <AnimatePresence exitBeforeEnter>
                    {isAll && <Complete/>}
                    {arrayCards.filter((card) => activeCard === card.id).map((card) =>
                            <Card arrayCards={arrayCards} image={card.image} length={arrayCards.length} word={card.word}
                                  antonym={card.antonym}
                                  synonymous={card.synonymous} examples={card.examples} key={card.id}
                                  animationKey={card.id}
                                  id={card.id}
                                  activeCard={activeCard} onIKnow={onIKnow} onIDontKnow={onIDontKnow}/>)}
                </AnimatePresence>
            </div>
        </div>
    )
}

export default Learn