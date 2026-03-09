import { useSelector, useDispatch } from "react-redux"
import { increment, decrement, incrementamount} from "./redux/features/counterslice";
import { useState } from "react"

function App() {
  const count = useSelector((state)=>state.counter.value)
  console.log(count);
  
  const dispatch = useDispatch()
  const [amount, setAmount] = useState(0)

  const handleAddAmount = () => {
    dispatch(incrementamount(Number(amount)))
    setAmount("") 
  }

  // const handleIncrement = () => {
  //   dispatch(increment())
  // }
  // const handleDecrement = () => {
  //   dispatch(decrement())    
  // }


  return (
    <>
    <button onClick={() =>dispatch(increment() )}>
      Increment
    </button>
    <h1>{count}</h1>

    <button onClick={() =>dispatch(decrement() )}>
      Decrement
    </button>

    <input type="number" placeholder="Enter your Value" value={amount} onChange={(e) => setAmount(Number(e.target.value))} />
    
    <button onClick={handleAddAmount}>
      Add Amount
    </button>
    </>
  )
}

export default App
