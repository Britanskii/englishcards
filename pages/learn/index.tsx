import s from "../../styles/learn/learn.module.sass"
import Card from "../../components/card/Card";
import {useEffect, useState} from "react";
import {AnimatePresence, motion} from "framer-motion"
import {CardI} from "../../interfaces/interfaces";
import {getRandomIntenger} from "../../functions/randomNumber";
import LinkNext from "../../components/link/Link";
import {array} from "prop-types";

interface LearnProps {
    contacts: any
    arrayCards: CardI[]
}

const Learn = (props: LearnProps) => {

    const [arrayCards, setArrayCards] = useState<CardI[]>([])
    const [activeCard, setActiveCard] = useState(0)

    const getCardRandomId = (array: CardI[]) => array[getRandomIntenger(0, array.length)].id

    const onIKnow = (id: number) => {
        if (arrayCards !== undefined) {
            if (arrayCards.length > 1) {
                let newArrayCards: CardI[] = []
                newArrayCards = arrayCards.filter((card) => card.id !== id)

                setActiveCard(newArrayCards[getRandomIntenger(0, newArrayCards.length)].id)
                setArrayCards(newArrayCards)
            }
        }
    }

    const onIDontKnow = () => {
        if (arrayCards.length > 1) {
            let id = arrayCards[getRandomIntenger(0, arrayCards.length)].id

            while (id === activeCard) {
                id = arrayCards[getRandomIntenger(0, arrayCards.length)].id
            }

            setActiveCard(id)
        }
    }

    useEffect(() => {
        setArrayCards(props.arrayCards)
        setActiveCard(getCardRandomId(props.arrayCards))
    }, [props.arrayCards])

    const card = arrayCards.filter((card) => activeCard === card.id).map((card) => {

        return <Card image={card.image} length={arrayCards.length} word={card.word} antonym={card.antonym}
                     synonymous={card.synonymous} examples={card.examples} key={card.id} animationKey={card.id} id={card.id}
                     activeCard={activeCard} onIKnow={onIKnow} onIDontKnow = {onIDontKnow}/>
    })

    return (
        <div className={s.learn}>
            <AnimatePresence exitBeforeEnter>
                {card}
            </AnimatePresence>
            <LinkNext className={`button ${s.learn__back}`} href={"/"}>
                Назад
            </LinkNext>
        </div>
    )
}

export const getStaticProps = async () => {
    const response = await fetch( `${process.env.API_URL}/api/cards`)

    const arrayCards = await response.json()

    return {
        props: {arrayCards, fallback: false}
    }
}

export default Learn