
// Updater function: a function passed as an argument to setState() usually. 
                    //  ex: setYear(arrow Functoin)
                    // allow for safe updates based on the previous state used with multiple state updates and asynchronous
                    // functions. It is a good practice to use updater function

import React , {useState} from "react"


function MyComponent(){

    const [count, setCount]= useState(0)

    const Increment = () =>
    {


        //updater function takes the pending state to calculate NEXT state
        //react puts your updater fucntion in a queue(waiting in  a line)
        // during the next render, it will call them in a same order
        setCount(c => c + 1)
        setCount(c => c + 1)
        setCount(c => c + 1)

        //the above codes increment 3 times at once 
    }

    const decrement = () =>
    {
        setCount(c => c - 1)
        setCount(c => c - 1)
        setCount(c => c - 1)

        //the above codes decrement 3 times at once
    }

    const reset = () =>{
        // setCount(0)
        // or 
        setCount(c => c = 0)
    }

    return(<div className="counter-container">
        <p className="count-display">Count: {count}</p>
        <button className="counter-button" onClick={decrement}>Decrement</button>
        <button className="counter-button" onClick={reset}>reset</button>
        <button className="counter-button" onClick={Increment}>Incremeent</button>
    </div>)

}

export default MyComponent