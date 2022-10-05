import {
    DictionaryState,
    MistakesAction,
    MistakesActions
} from "../types/types"

const defaultState: DictionaryState = {
    id: "mistakes",
    image: "/mistakes.svg",
    title: "Ошибки",
    words: [],
    stateWords: [],
}

const mistakesReducer = (state = defaultState, action: MistakesAction): DictionaryState => {
    switch (action.type) {
        case MistakesActions.ADD_WORD:
            return {...state, stateWords: [...state.words, action.payload], words: [...state.words, action.payload]}
        case MistakesActions.DELETE_WORD:
            return {...state, words: state.words.filter(word => word.id !== action.payload.id)}
        case MistakesActions.NOTHING:
            return state
        default:
            return state
    }
}

export default mistakesReducer