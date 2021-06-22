
import React, {useState} from "react"
import "./functioncomp.css"

const FunctionCounter = () => {

  const [count, setState] = useState(0)
  const handleIncrease = (event) => {
        setState(count + 1)
  }

 
  const handleDecrease = (event) => {
            setState(count - 1)
  }

  

    return (
        <div className="funccomp ">
            <h1>FUNCTION COMPONENT EXAMPLE</h1>
            <h2>{count}</h2>
            <button onClick={handleIncrease}>handleIncrease</button>
            <button onClick={handleDecrease}> handleDecrease</button>
        </div>
    );
}

export default FunctionCounter;
