import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface todoState {
  todos: string[]
}

const initialState: todoState = {
  todos: []
}

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<string>) => {
      state.todos.push(action.payload)
    },
    removeTodoByIndex: (state, action: PayloadAction<Number>) => {
      state.todos = state.todos.filter((_, index) => index !== action.payload)
    }
  }
})

export const { addTodo, removeTodoByIndex } = todoSlice.actions
export default todoSlice.reducer