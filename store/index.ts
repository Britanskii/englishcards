import {configureStore} from "@reduxjs/toolkit";
import dictionaryReducer from "./reducers/dictionaryReducer";

export const store = configureStore({
    reducer: dictionaryReducer
})

export type RootState = ReturnType<typeof dictionaryReducer>