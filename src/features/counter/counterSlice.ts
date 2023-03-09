import { createSlice } from "@reduxjs/toolkit";

interface CounterState {
    value: number
    incrementValue: number
    timesClicked: number
}

const initialState: CounterState = {
    value: 0,
    incrementValue: 0,
    timesClicked: 0
}

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state, action) => {state.value += action.payload},
        decrement: (state,action) => {state.value -= action.payload},
        setIncrement: (state,action) => {state.incrementValue += action.payload},
        incrementClick: (state) => {state.timesClicked +=1},
        tick: (state) => {state.value += state.incrementValue}
    },

})

export const {increment,decrement,incrementClick,setIncrement,tick} = counterSlice.actions

export default counterSlice.reducer