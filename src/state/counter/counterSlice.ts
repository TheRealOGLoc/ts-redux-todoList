import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface CounterState {
    value: number
}

// initial state value
const initialState: CounterState = {
    value: 0
}

// counter slice, counter切片
const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {     // tell redux how to update the state value with actions
        increment: (state) => {     // action, used to update the value of state
            state.value += 1
        },
        decrement: (state) => {
            state.value -= 1
        },
        incrementByAmount: (state, action: PayloadAction<number>) => {
            state.value += action.payload
        }
    }
})

export const { increment, decrement, incrementByAmount } = counterSlice.actions

export default counterSlice.reducer