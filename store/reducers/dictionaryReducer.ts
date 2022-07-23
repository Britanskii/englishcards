import {DictionaryAction, DictionaryActions, DictionaryState} from "../types/types"

const defaultState = {
    page: 0,
    dictionary: [],
    stateDictionary: []
}

const dictionaryReducer = (state = defaultState, action: DictionaryAction): DictionaryState => {
    switch (action.type) {
        case DictionaryActions.SET_PAGE:
            return {...state, page: action.payload}
        case DictionaryActions.SET_DICTIONARY:
            return {...state, dictionary: action.payload}
        case DictionaryActions.SET_STATE_DICTIONARY:
            return {...state, stateDictionary: action.payload}
        default:
            return state
    }
}

export default dictionaryReducer