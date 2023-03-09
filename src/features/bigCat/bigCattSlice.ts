import { createSlice } from "@reduxjs/toolkit";

interface Clicked {
    clicked: boolean
}

const initialState:Clicked = {
    clicked: false
}

export const bigCatSlice = createSlice({
    name: 'bigCat',
    initialState,
    reducers: {
        swapImage: (state,action) => {state.clicked = action.payload}
    }
})

export const {swapImage} = bigCatSlice.actions

export default bigCatSlice.reducer;
