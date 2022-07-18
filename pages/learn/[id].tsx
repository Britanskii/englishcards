import s from "./learn.module.sass"
import data from "../../jsons/dictionaries.json";
import {CardI} from "../../interfaces";
import Learn from "../../interfaces/learn/Learn";
import {GetStaticProps, GetStaticPaths } from "next"

interface LearnProps {
    arrayCards: CardI[]
}

const LearnById = (props: LearnProps) => {

    return <Learn arrayCards={props.arrayCards}/>
}

export const getStaticProps: GetStaticProps = async (context) => {
    const id = context.params?.id

    // console.log(data[0])



    // @ts-ignore
    const arrayCards = data[id - 1].dictionary

    return {
        props: {arrayCards}
    }
}

export const getStaticPaths: GetStaticPaths = async () => {

    // const arrayCards: CardI[] = await CardService.getCards()

    const paths = data.map(dictionary => {
        return {
            params: {id: dictionary.id.toString()}
        }
    })

    return {
        paths,
        fallback: false
        // props: {arrayCards: data}
    }
}

export default LearnById