import {CardI} from "../../interfaces"

export enum DictionaryActions {
    SET_ID = "SET_ID",
    SET_DICTIONARY = "SET_DICTIONARY",
    SET_STATE_DICTIONARY = "SET_STATE_DICTIONARY"
}

export enum MistakesActions {
    ADD_WORD = "ADD_WORD",
    NOTHING = "SET_STATE_DICTIONARY"
}

export interface AddMistakesWord {
    type: MistakesActions.ADD_WORD
    payload: CardI
}

export interface MistakesNothing {
    type: MistakesActions.NOTHING
}

export interface DictionaryState {
    id: number | string
    image: string
    title: string
    words: CardI[]
    stateWords: CardI[]
}

export interface Dictionary {
    id: number | string
    image: string
    title: string
    words: CardI[]
}

export interface LearnSelected {
    id: boolean
    dictionary?: Dictionary
}

interface SetPageAction {
    type: DictionaryActions.SET_ID,
    payload: number | string
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
export type MistakesAction = AddMistakesWord | MistakesNothing

