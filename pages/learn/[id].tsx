import data from "../../jsons/dictionaries.json"
import {CardI} from "../../interfaces"
import Learn from "../../interfaces/learn/Learn"
import {GetStaticPaths, GetStaticProps} from "next"
import {LearnSelected, LearnType} from "../../store/types/types"

interface LearnProps {
    id: LearnType
    title: string
    image: string
    arrayCards: CardI[]
}

const LearnById = (props: LearnProps) => {

    const selected: LearnSelected = {
        type: LearnType.ID,
        dictionary: {
            id: props.id,
            title: props.title,
            image: props.image,
            words: props.arrayCards
        }
    }

    return (
        <Learn selected = {selected}/>
    )
}

export const getStaticProps: GetStaticProps = async (context) => {

    const index: string | string[] | undefined = context.params?.id

    let id
    let arrayCards: CardI[] = []
    let title = ""
    let image = ""

    if (index !== undefined) {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        const currentData = data[index - 1]

        id = currentData.id
        arrayCards = currentData.words
        title = currentData.title
        image = currentData.image
    }

    return {
        props: {arrayCards, title, image, id}
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