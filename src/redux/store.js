import { configureStore } from '@reduxjs/toolkit'
import SnippetReducer from './reducers/snipetReducer'
export const store = configureStore({
    reducer: {
        SnippetReducer
    }
})