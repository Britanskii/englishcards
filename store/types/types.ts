import {CardI} from "../../interfaces"

export enum DictionaryActions {
    SET_PAGE = "SET_PAGE",
    SET_DICTIONARY = "SET_DICTIONARY"
}

export interface DictionaryState {
    page: number
    dictionary: CardI[]
}

interface SetPageAction {
    type: DictionaryActions.SET_PAGE,
    payload: number
}

interface SetDictionaryAction {
    type: DictionaryActions.SET_DICTIONARY,
    payload: CardI[]
}

export type DictionaryAction = SetPageAction | SetDictionaryAction


