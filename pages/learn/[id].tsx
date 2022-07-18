import s from "./learn.module.sass"
import data from "../../jsons/cards.json";
import {CardI} from "../../interfaces";
import Learn from "../../interfaces/learn/Learn";

interface LearnProps {
    arrayCards: CardI[]
}

const LearnById = (props: LearnProps) => {

    return <Learn arrayCards={props.arrayCards}/>
}

export const getStaticProps = async () => {

    // const arrayCards: CardI[] = await CardService.getCards()

    return {
        props: {arrayCards: data}
    }
}

export default LearnById