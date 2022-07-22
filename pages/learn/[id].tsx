import s from "./learn.module.sass"
import data from "../../jsons/dictionaries.json"
import {CardI} from "../../interfaces"
import Learn from "../../interfaces/learn/Learn"
import {GetStaticProps, GetStaticPaths } from "next"

interface LearnProps {
    arrayCards: CardI[]
}

const LearnById = (props: LearnProps) => {

    return (
        <Learn id = {true} arrayCards={props.arrayCards}/>
    )
}

export const getStaticProps: GetStaticProps = async (context) => {

    const id: string | string[] | undefined = context.params?.id

    let arrayCards: CardI[] = []

    if (id !== undefined) {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        arrayCards = data[id - 1].dictionary
    }

    return {
        props: {arrayCards}
    }
}

export const getStaticPaths: GetStaticPaths = async () => {

    const paths = data.map(dictionary => {
        return {
            params: {id: dictionary.id.toString()}
        }
    })

    return {
        paths,
        fallback: false
    }
}

export default LearnById