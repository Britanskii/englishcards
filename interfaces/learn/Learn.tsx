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

interface LearnProps {
    id: boolean
    arrayCards: CardI[]
}

const Learn = (props: LearnProps) => {

    const {setDictionary, setStateDictionary, addMistakesWord} = useActions()

    const {dictionary} = useTypedSelector(state => state.dictionary)
    const {stateDictionary} = useTypedSelector(state => state.dictionary)

    const [arrayCards, setArrayCards] = useState<CardI[]>([])
    const [maxCards, setMaxCards] = useState<number>(0)
    const [activeCard, setActiveCard] = useState(0)
    const [isAll, setIsAll] = useState(false)

    const getCardRandomId = (array: CardI[]) => array[getRandomIntenger(0, array.length)].id

    const onIKnow = (id: number) => {
        if (arrayCards !== undefined) {
            const newArrayCards = arrayCards.filter((card) => card.id !== id)

            if (newArrayCards.length > 0) setActiveCard(newArrayCards[getRandomIntenger(0, newArrayCards.length)].id)
            setStateDictionary(newArrayCards)
            setArrayCards(newArrayCards)
            if (newArrayCards.length === 0) setIsAll(true)
        }
    }

    const onIDontKnow = () => {
        addMistakesWord(arrayCards[activeCard])

        let id = getCardRandomId(arrayCards)

        if (arrayCards.length > 1) {
            while (id === activeCard) {
                id = getCardRandomId(arrayCards)
            }
        }

        setActiveCard(id)
    }

    useEffect(() => {
        if (props.id) {
            setMaxCards(props.arrayCards.length)
            setDictionary(props.arrayCards)
            setStateDictionary(props.arrayCards)
            setArrayCards(props.arrayCards)
            setActiveCard(getCardRandomId(props.arrayCards))
        } else {
            setMaxCards(dictionary.length)
            setArrayCards(stateDictionary)
            if (stateDictionary.length > 0) {
                setActiveCard(getCardRandomId(stateDictionary))
            } else {
                setIsAll(true)
            }
        }
    }, [])

    const card = arrayCards.filter((card) => activeCard === card.id).map((card) => {

        return <Card arrayCards = {arrayCards} image={card.image} length={arrayCards.length} word={card.word} antonym={card.antonym}
                     synonymous={card.synonymous} examples={card.examples} key={card.id} animationKey={card.id}
                     id={card.id}
                     activeCard={activeCard} onIKnow={onIKnow} onIDontKnow={onIDontKnow}/>
    })

    return (
        <div className={s.learn}>
            <div className={s.learn__progress}>
                Повторено слов {maxCards - arrayCards.length}/{maxCards}
                <Progress to={maxCards} progress={arrayCards.length}/>
            </div>
            <div className={s.learn__cards}>
                <AnimatePresence exitBeforeEnter>
                    {card}
                    {isAll &&
                    <Complete/>
                    }
                </AnimatePresence>
            </div>
        </div>
    )
}

export default Learn