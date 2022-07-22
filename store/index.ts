import {configureStore} from "@reduxjs/toolkit"
import dictionaryReducer from "./reducers/dictionaryReducer"

export const store = configureStore({
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    reducer: dictionaryReducer
})

export type RootState = ReturnType<typeof dictionaryReducer>