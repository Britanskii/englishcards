import {DictionaryActions, DictionaryAction} from "../types/types"
import {Dispatch} from "redux"
import {CardI} from "../../interfaces"


export const setDictionaryId = (id: number | string) => {
    return (dispatch: Dispatch<DictionaryAction>) => {
        dispatch({type: DictionaryActions.SET_ID, payload: id})
    }
}

export const setWords= (array: CardI[]) => {
    return (dispatch: Dispatch<DictionaryAction>) => {
        dispatch({type: DictionaryActions.SET_DICTIONARY, payload: array})
    }
}

export const setStateWords= (array: CardI[]) => {
    return (dispatch: Dispatch<DictionaryAction>) => {
        dispatch({type: DictionaryActions.SET_STATE_DICTIONARY, payload: array})
    }
}


