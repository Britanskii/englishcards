import {Dispatch} from "redux"
import {MistakesAction, MistakesActions} from "../types/types"
import {CardI} from "../../interfaces"

export const addMistakesWord = (card: CardI) => {
    return (dispatch: Dispatch<MistakesAction>) => {
        dispatch({type: MistakesActions.ADD_WORD, payload: card})
    }
}