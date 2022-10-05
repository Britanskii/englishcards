import Learn from "../../interfaces/learn/Learn"
import {LearnType} from "../../store/types/types"


const Index = () => {

    return (
        <Learn selected={{type: LearnType.MISTAKES}}/>
    )
}

export default Index