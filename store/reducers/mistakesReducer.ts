import {
    MistakesAction,
    MistakesActions
} from "../types/types"
import {DictionaryI} from "../../interfaces"

const defaultState: DictionaryI = {
    id: 8,
    image: "/mistakes.svg",
    title: "Ошибки",
    dictionary: []
}

const mistakesReducer = (state = defaultState, action: MistakesAction): DictionaryI => {
    switch (action.type) {
        case MistakesActions.ADD_WORD:
            return {...state, dictionary: [...state.dictionary, action.payload]}
        default:
            return state
    }
}

export default mistakesReducer