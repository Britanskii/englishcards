import {combineReducers, configureStore} from "@reduxjs/toolkit"
import dictionaryReducer from "./reducers/dictionaryReducer"
import mistakesReducer from "./reducers/mistakesReducer"

const rootReducer = combineReducers({
    dictionary: dictionaryReducer,
    mistakes: mistakesReducer,
})

export const store = configureStore({
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    reducer: rootReducer
})

export type RootState = ReturnType<typeof rootReducer>