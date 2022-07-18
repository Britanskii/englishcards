import {DictionaryActions, DictionaryAction} from "../types/types";
import {Action, Dispatch} from "redux";
import {log} from "util";
import {CardI} from "../../interfaces";


export const setDictionaryId = (id: number) => {
    return (dispatch: Dispatch<DictionaryAction>) => {
        dispatch({type: DictionaryActions.SET_PAGE, payload: id})
    }
}

export const setDictionary= (array: CardI[]) => {
    return (dispatch: Dispatch<DictionaryAction>) => {
        dispatch({type: DictionaryActions.SET_DICTIONARY, payload: array})
    }
}


