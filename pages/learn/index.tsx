import s from "../../styles/learn/learn.module.sass"
import {CardI} from "../../interfaces/interfaces";
import {useEffect, useState} from "react";
import {AnimatePresence} from "framer-motion";
import LinkNext from "../../components/link/Link";
import {getRandomIntenger} from "../../functions/randomNumber";
import Card from "../../components/card/Card";
import CardService from "../../services/CardService";
import data from "../../jsons/cards.json"

interface LearnProps {
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

// ${process.env.API_URL}

export const getStaticProps = async () => {

    // const arrayCards: CardI[] = await CardService.getCards()

    return {
        props: {arrayCards: data}
    }
}

export default Learn