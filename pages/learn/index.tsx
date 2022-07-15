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
    const [pastCard, setPastCard] = useState<number | null>(null)

    const genNewArrayCards = (array: CardI[]) => {
        if (array !== undefined) {
            const newArrayCards = array.filter((card) => {

                return card.id !== pastCard
            })

            setArrayCards(newArrayCards)
        }
    }

    useEffect(() => {
        setPastCard(activeCard)

        genNewArrayCards(arrayCards)
    }, [activeCard])

    const cards = arrayCards.map((card, id) => {

        return <Card image={card.image} length={arrayCards.length} word={card.word} antonym={card.antonym}
                     synonymous={card.synonymous} examples={card.examples} key={id} animationKey={id} id={id}
                     activeCard={activeCard} setActiveCard={setActiveCard}/>
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