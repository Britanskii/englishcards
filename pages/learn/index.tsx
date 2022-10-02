import {CardI} from "../../interfaces"
import data from "../../jsons/cards.json"
import Learn from "../../interfaces/learn/Learn"
import useTypedSelector from "../../hooks/useTypedSelector"

interface LearnProps {
    arrayCards: CardI[]
}

const Index = (props: LearnProps) => {

    const arrayCards =  props.arrayCards

    return (
        <Learn id = {false} arrayCards={arrayCards}/>
    )
}

export const getStaticProps = async () => {

    return {
        props: {arrayCards: data}
    }
}

export default Index