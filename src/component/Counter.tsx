import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../state/store"
import { decrement, increment, incrementByAmount } from "../state/counter/counterSlice"
import { ChangeEvent, useEffect, useState } from "react"

export default function Counter() {
    const count = useSelector((state: RootState) => state.counterReducer.value)
    const dispatch = useDispatch()
    const [newNumber, setNewNumber] = useState<number>(0);
    const [numberTimesTwo, setNumberTimesTwo] = useState<number>(0)


    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setNewNumber(Number(event.target.value))
    }

    useEffect(() => {
        setNumberTimesTwo(count * 2)
    }, [count])

    return (
        <div>
            <h2>{count}</h2>
            <h2>Times Two: {numberTimesTwo}</h2>
            <input type="text" onChange={handleChange} />
            <div>
                <button onClick={() => dispatch(increment())} >INCREMENT</button>
                <button onClick={() => dispatch(decrement())} >DECREMENT</button>
                <button onClick={() => dispatch(incrementByAmount(newNumber))}>INCREMENT BY AMOUINT</button>
            </div>
        </div>
    )
}
