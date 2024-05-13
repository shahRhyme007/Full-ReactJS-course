// useEffect() = React hook that tells React do some code when ->
                // - this component re-renders or 
                // - this component mounts(creating and appending/adding a component to the DOM) or
                // - the state of a value
// useEffect is like running side code
// try to use useEffect at the top of your component


// useEffect(function, [dependencies])  -> the array of dependencies are optional

// 1. useEffect(() => {}) // Runs after every re-render
// 2. useEffect(() => {}, []) // Runs only on mount
// 3. useEffect(() => {}, [value]) // Runs on mount + when value changes

// USES
// #1 Event Listeners
// #2 DOM manipulation
// #3 Subscriptions (real-time updates)
// #4 Fetching Data from an API
// #5 Clean up when a component unmounts(removing a component from the DOM)
               



//we have to import useEffect 
import React, {useState, useEffect} from "react";

function MyComponent(){

    const [count, setCount] = useState(0)
    const [color, setColor] = useState("green")
    
    // we are using an arrow function. everytime the component re-renders, what would we like to do 
    // the count in the title also increments when we are clicking on the add button(as many times)
    // 1. useEffect(() => {}) // Runs after every re-render

    /*useEffect(() => {
        document.title = `Count: ${count}`},
    )*/
// -----------------------------------------------------------------------------------------------------------
    // 2. useEffect(() => {}, []) // Runs only on mount
        useEffect(() => {
        document.title = `Count: ${count}`}, [])
// -------------------------------------------------------------------------------------------------------------



// 3. useEffect(() => {}, [value]) // Runs on mount + when value changes (similear to number 1 with not having dependencies)
// if the count variable(dependencies in this case) changes/updates then perform the side code(doucment.title...)
useEffect(() => {
    document.title = `Count: ${count} ${color}`},  [count, color])




    function addCount(){

        setCount(c => c+1)
    }
    
    function substractCount(){

        setCount(c => c-1)
    }

    function changeColor(){
        setColor(c => c === "green" ? "red" : "green")

    }

    return(<>
            <p style={{color: color}}>Count: {count}</p>
            <button onClick={addCount}>Add</button>
            <button onClick={substractCount}>Substract</button> <br />
            <button onClick={changeColor}>Change color</button>
    </>)


}

export default MyComponent