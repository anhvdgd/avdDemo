import { createSlice } from "@reduxjs/toolkit"; 

const initialState = {
    value: 0,
    items: []
}

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state, action) => {
            state.value += 1
            state.items.push(action.payload)
        },
        decrement: (state,action) => {
            state.value -= 1
            state.items.splice(action.payload, 1)
        }
    }
})

export const {increment, decrement} = counterSlice.actions

export default counterSlice.reducer