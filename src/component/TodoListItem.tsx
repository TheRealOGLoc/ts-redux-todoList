import { useDispatch } from "react-redux"
import { removeTodoByIndex } from "../state/todo/todoSlice"

interface TodoListItemProps {
  todo: string,
  index: number
}

export default function TodoListItem({todo, index} : TodoListItemProps) {

  const dispatch = useDispatch()

  return (
    <div>
      <p>{todo}</p>
      <button onClick={() => dispatch(removeTodoByIndex(index))} >X</button>
    </div>
  )
}
