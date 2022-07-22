import {CardI} from "../../interfaces"
import data from "../../jsons/cards.json"
import Learn from "../../interfaces/learn/Learn"

interface LearnProps {
    arrayCards: CardI[]
}

const Index = (props: LearnProps) => {

    return (
        <Learn id = {false} arrayCards={props.arrayCards}/>
    )
}

export const getStaticProps = async () => {

    return {
        props: {arrayCards: data}
    }
}

export default Index