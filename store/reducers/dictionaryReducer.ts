import {SET_PAGE} from "../constants";

const defaultState = {
    page: 2
}

const reducerDictionary = (state = defaultState, action) => {
    switch (action.type) {
        case SET_PAGE:
            return {...state, page: action.payload}
        default:
            return state
    }
}

export default reducerDictionary