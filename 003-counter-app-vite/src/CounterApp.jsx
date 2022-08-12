import { useState } from "react";
import { PropTypes } from "prop-types";


export const  CounterApp = ({value}) =>{
    
    const [counter, setCounter] = useState(value)

    const handleAdd = (  ) =>{
            setCounter(counter + 1);
        }

    const handleRemove = (  ) =>{
            setCounter((c) => c - 1);
        }

    const handleReset = (  ) =>
        {
            setCounter(value);
        }    

    return ( 
    <>
    <h1>CounterAPP</h1>
    <h2>Value: {counter} </h2>
    <button  onClick={handleAdd}>+1</button>
    <button  onClick={handleRemove}>-1</button>
    <button  onClick={handleReset}>Reset</button>
    </>)
}

;

CounterApp.propTypes ={
    value: PropTypes.number.isRequired
}


export default CounterApp;

