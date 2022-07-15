import s from "./learn.module.sass"
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

    const [arrayCards, setArrayCards] = useState<CardI[]>(props.arrayCards)
    const [activeCard, setActiveCard] = useState(0)

    const getCardRandomId = (array: CardI[]) => {
        return array[getRandomIntenger(0, array.length)].id
    }

    const onIKnow = (id: number) => {
        if (arrayCards !== undefined) {
            if (arrayCards.length > 1) {
                let newArrayCards: CardI[] = []
                newArrayCards = arrayCards.filter((card) => {
                    console.log(card.id)
                    return card.id !== id
                })

                setActiveCard(newArrayCards[getRandomIntenger(0, newArrayCards.length)].id)
                setArrayCards(newArrayCards)
            }
        }
    }

    const onIDontKnow = (id: number) => {
        setActiveCard(arrayCards[getRandomIntenger(0, arrayCards.length)].id)
    }

    useEffect(() => {
        setActiveCard(getCardRandomId(props.arrayCards))
    }, [])

    const cards = arrayCards.map((card) => {

        return <Card image={card.image} length={arrayCards.length} word={card.word} antonym={card.antonym}
                     synonymous={card.synonymous} examples={card.examples} key={card.id} animationKey={card.id} id={card.id}
                     activeCard={activeCard} onIKnow={onIKnow} onIDontKnow = {onIDontKnow}/>
    })

    return (
        <div className={s.learn}>
            <AnimatePresence exitBeforeEnter>
                {cards}
            </AnimatePresence>
            <LinkNext className={`button ${s.learn__back}`} href={"/"}>
                Назад
            </LinkNext>
        </div>
    )
}

export const getStaticProps = async () => {
    const response = await fetch("http://localhost:3000/api/cards")

    const arrayCards = await response.json()

    if (!arrayCards) {
        return {
            notFound: true
        }
    }

    return {
        props: {arrayCards}
    }
}

export default Learn