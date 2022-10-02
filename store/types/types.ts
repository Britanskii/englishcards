import {CardI} from "../../interfaces"

export enum DictionaryActions {
    SET_PAGE = "SET_PAGE",
    SET_DICTIONARY = "SET_DICTIONARY",
    SET_STATE_DICTIONARY = "SET_STATE_DICTIONARY"
}

export enum MistakesActions {
    ADD_WORD = "ADD_WORD"
}

export interface AddMistakesWord {
    type: MistakesActions.ADD_WORD
    payload: CardI
}

export interface DictionaryState {
    page: number
    dictionary: CardI[]
    stateDictionary: CardI[]
}

interface SetPageAction {
    type: DictionaryActions.SET_PAGE,
    payload: number
}

interface SetDictionaryAction {
    type: DictionaryActions.SET_DICTIONARY,
    payload: CardI[]
}

interface SetStateDictionaryAction {
    type: DictionaryActions.SET_STATE_DICTIONARY,
    payload: CardI[]
}

export type DictionaryAction = SetPageAction | SetDictionaryAction | SetStateDictionaryAction
export type MistakesAction = AddMistakesWord

