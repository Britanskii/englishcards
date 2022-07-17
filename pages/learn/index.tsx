import {CardI} from "../../interfaces";
import data from "../../jsons/cards.json"
import Learn from "../../interfaces/learn/Learn";

interface LearnProps {
    arrayCards: CardI[]
}

const Index = (props: LearnProps) => {

    return (
        <Learn arrayCards={props.arrayCards}/>
    )
}

// ${process.env.API_URL}

export const getStaticProps = async () => {

    // const arrayCards: CardI[] = await CardService.getCards()

    return {
        props: {arrayCards: data}
    }
}

export default Index