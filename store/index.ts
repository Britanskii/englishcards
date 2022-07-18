import {configureStore} from "@reduxjs/toolkit";
import dictionaryReducer from "./reducers/dictionaryReducer";

export const store = configureStore({
    // @ts-ignore
    reducer: dictionaryReducer
})

export type RootState = ReturnType<typeof dictionaryReducer>