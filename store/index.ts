import {combineReducers, configureStore} from "@reduxjs/toolkit"
import dictionaryReducer from "./reducers/dictionaryReducer"
import mistakesReducer from "./reducers/mistakesReducer"

const rootReducer = combineReducers({
    dictionary: dictionaryReducer,
    mistakes: mistakesReducer,
})

export const store = configureStore({
    reducer: rootReducer
})

export type RootState = ReturnType<typeof rootReducer>