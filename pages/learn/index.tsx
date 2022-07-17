import s from "../../styles/learn/learn.module.sass"
import Card from "../../components/card/Card";
import {useEffect, useState} from "react";
import {AnimatePresence, motion} from "framer-motion"
import {CardI} from "../../interfaces/interfaces";
import {getRandomIntenger} from "../../functions/randomNumber";
import LinkNext from "../../components/link/Link";
import {gql} from "@apollo/client";
import CardService from "../../services/CardService";
import {dehydrate, QueryClient, useQuery} from "react-query";
import {client} from "../_app";

interface LearnProps {
    arrayCards: CardI[]
}

const Learn = (props: LearnProps) => {

    console.log(props)

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

export async function getStaticProps() {
    const { data } = await client.query({
        query: gql`
        query Countries {
          countries {
            code
            name
            emoji
          }
        }
      `,
    });

    return {
        props: {
            countries: data.countries.slice(0, 4),
            fallback: true
        },

    };
}

// export const getStaticProps = async () => {
//     return {
//         props: {
//             anime: []
//         },
//     }
// }
//     const {data} = await client.query({
//         query: gql`
//         query Countries {
//           countries {
//             code
//             name
//             emoji
//           }
//         }
//       `,
//     });
//
//     return {
//         props: {
//             countries: data
//         },
//     };
// }

    // const queryClient = new QueryClient({
    //     defaultOptions: {
    //         queries: {
    //             refetchOnWindowFocus: false,
    //             refetchOnMount: false,
    //             retry: false,
    //             staleTime: 12000
    //         }
    //     }
    // })
    //
    // await queryClient.prefetchQuery('arrayCards', CardService.getCards)

    // const response = await fetch("http://localhost:3000/api/cards")
    //
    // const arrayCards = await response.json()
    //
    // return {
    //     props: {
    //         dehydratedState: dehydrate(queryClient),
    //     },
    // }
// }


export default Learn