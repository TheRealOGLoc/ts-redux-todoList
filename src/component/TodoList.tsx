import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../state/store"
import { useRef } from "react"
import { addTodo } from "../state/todo/todoSlice";
import TodoListItem from "./TodoListItem";

export default function TodoList() {
  const todos = useSelector((state: RootState) => state.todoReducer.todos)
  const todoRef = useRef<HTMLInputElement>(null);
  const dispatch = useDispatch()

  return (
    <div>
      <div>
        <input type="text" ref={todoRef} />
        <button onClick={() => dispatch(addTodo(String(todoRef.current?.value)))} >ADD TO LIST</button>
      </div>
      <div>
        {todos.map((todo, index) => <TodoListItem todo={todo} key={index} index={index} />)}
      </div>
    </div>
  )
}
