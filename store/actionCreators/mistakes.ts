import {Dispatch} from "redux"
import {MistakesAction, MistakesActions} from "../types/types"
import {CardI} from "../../interfaces"

export const addMistakesWord = (card: CardI, arrayCards: CardI[]) => {

    const isNotExist = !!arrayCards.indexOf(card)

    if (isNotExist) {
        const mistakeWord = {...card, id: arrayCards.length}

        return (dispatch: Dispatch<MistakesAction>) => {
            dispatch({type: MistakesActions.ADD_WORD, payload: mistakeWord})
        }
    }

    return (dispatch: Dispatch<MistakesAction>) => {
        dispatch({type: MistakesActions.NOTHING})
    }
}

export const deleteMistakesWord = (card: CardI) => {
    return (dispatch: Dispatch<MistakesAction>) => {
        dispatch({type: MistakesActions.DELETE_WORD, payload: card})
    }
}