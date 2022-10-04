import {DictionaryAction, DictionaryActions, DictionaryState} from "../types/types"

const defaultState: DictionaryState = {
    id: 0,
    title: "title",
    image: "string",
    words: [],
    stateWords: []
}

const dictionaryReducer = (state = defaultState, action: DictionaryAction): DictionaryState => {
    switch (action.type) {
        case DictionaryActions.SET_ID:
            return {...state, id: action.payload}
        case DictionaryActions.SET_DICTIONARY:
            return {...state, words: action.payload}
        case DictionaryActions.SET_STATE_DICTIONARY:
            return {...state, stateWords: action.payload}
        default:
            return state
    }
}

export default dictionaryReducer