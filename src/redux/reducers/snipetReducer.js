import {createSlice} from '@reduxjs/toolkit'


const initialState = {

}
export const SnippetSlice = createSlice({
    name: 'Snippet',
    initialState,
    reducers: {
        add: (state, action) => {

        }
    }

})


export const {add} = SnippetSlice.actions

export default SnippetSlice.reducer
