import s from "./learn.module.sass"
import Card from "../../components/card/Card";
import {useEffect, useState} from "react";
import {AnimatePresence, motion} from "framer-motion"
import {CardI} from "../../interfaces/interfaces";
import {getRandomIntenger} from "../../functions/randomNumber";
import LinkNext from "../../components/link/Link";

const arrayCardsRaw: CardI[] = [
    {
        word: {
            proposal: "career",
            translated: "Курс"
        },
        synonymous: {
            proposal: "course",
            translated: "карьера"
        },
        antonym: {
            proposal: "vocation",
            translated: "призвание"
        },
        examples: [
            {
                proposal: "The webcam <b>career</b> <b className ='synonymous'>course</b> is my <b className ='antonym'>vocation</b>",
                translated: "<b className ='synonymous'>Курс</b> по <b>карьере</b> в вебкаме это моё <b className ='antonym'>призвание</b>"
            }
        ],
        image: "https://www.jobgrade.ru/wp-content/uploads/2019/08/к4.jpg"
    },
    {
        word: {
            proposal: "Supply",
            translated: "Поставка"
        },
        synonymous: {
            proposal: "Afford",
            translated: "Позволить"
        },
        antonym: {
            proposal: "Debt",
            translated: "Долг"
        },
        examples: [
            {
                proposal: "We can <b className ='synonymous'>afford</b> to <b>supply</b>> new gachi-belts, but then we would be in <b className ='antonym'>debt</b>",
                translated: "Мы можем <b className ='synonymous'>позволить</b> себе <b>поставки</b> новых гачи-ремней, но тогда мы будем в <b className ='antonym'>долгах</b>"
            }
        ],
        image: "https://i.pinimg.com/originals/c0/2e/e5/c02ee500b8ac33c72b30be1f7578716b.jpg"
    },
    {
        word: {
            proposal: "Supply",
            translated: "Поставка"
        },
        synonymous: {
            proposal: "Afford",
            translated: "Позволить"
        },
        antonym: {
            proposal: "Debt",
            translated: "Долг"
        },
        examples: [
            {
                proposal: "We can <b className ='synonymous'>afford</b> to <b>supply</b> new gachi-belts, but then we would be in <b className ='antonym'>debt</b>",
                translated: "Мы можем <b className ='synonymous'>позволить</b> себе <b>поставки</b> новых гачи-ремней, но тогда мы будем в <b className ='antonym'>долгах</b>"
            }
        ],
        image: "https://i.pinimg.com/originals/c0/2e/e5/c02ee500b8ac33c72b30be1f7578716b.jpg"
    }
]

const Index = () => {

    const [arrayCards, setArrayCards] = useState<CardI[]>([])
    const [activeCard, setActiveCard] = useState(0)
    const [pastCard, setPastCard] = useState<number | null>(null)

    const genNewArrayCards = (array: CardI[]) => {
        const newArrayCards = array.filter((card, id) => {

            return id !== pastCard
        })


        setArrayCards(newArrayCards)
    }

    useEffect(() => {
        setPastCard(activeCard)

        genNewArrayCards(arrayCards)
    }, [activeCard])

    useEffect(() => {
        setArrayCards(arrayCardsRaw)

        genNewArrayCards(arrayCardsRaw)
    }, [])


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

export default Index