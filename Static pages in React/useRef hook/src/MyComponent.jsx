// useState() = useState() stores some sort of value which can be a number/array/object  and 
                // Re-renders the component when the state value changes.

// useRef() = "use Reference" Does not cause re-renders when its value changes.
            // When you want a component to “remember” some information,
            // but you don’t want that information to trigger new renders.


// useRef is helpful when: 

            // 1. Accessing/Interacting with DOM elements
            // 2. Handling Focus, Animations, and Transitions
            // 3. Managing Timers and Intervals

import React, {useState, useEffect, useRef} from "react";


function MyComponent(){


    // let [number, setNumber] = useState(0)
    
    // instead of using the usestate now we will be using the useRef as we dont want 
    // to cause rerender every time the value changes
    // const ref = useRef(0)
    // console.log(ref)


    const inputRef1 = useRef(null) //inputRef is on gigantic HTML object with one property called current
    const inputRef2= useRef(null) //inputRef is on gigantic HTML object
    const inputRef3 = useRef(null) //inputRef is on gigantic HTML object
    console.log(inputRef1) 



    // useRef returns an object which has one property called "current"
    // COMPONENT RERENDERS EVERY TIME WE CLICK ON THE "click me" button
    useEffect(() => {
        console.log("COMPONENT RENDERED")
    })



    function handleClick1()
    {
        // ref.current++
        // console.log(ref.current)
        inputRef1.current.focus()
        inputRef1.current.style.backgroundColor = "yellow"
        inputRef2.current.style.backgroundColor = ""
        inputRef3.current.style.backgroundColor = ""

    }

    
    function handleClick2()
    {
        // ref.current++
        // console.log(ref.current)
        inputRef2.current.focus()
        inputRef2.current.style.backgroundColor = "yellow"
        inputRef1.current.style.backgroundColor = ""
        inputRef3.current.style.backgroundColor = ""

    }

    
    function handleClick3()
    {
        // ref.current++
        // console.log(ref.current)
        inputRef3.current.focus()
        inputRef3.current.style.backgroundColor = "yellow"
        inputRef1.current.style.backgroundColor = ""
        inputRef2.current.style.backgroundColor = ""

    }

    return(<div>
                <button onClick={handleClick1}>
                    Click me 1!
                </button>
                {/* ref will create a reference of inputRef object */}
                <input ref={inputRef1}/>

                <br />
                <button onClick={handleClick2}>
                    Click me 2!
                </button>
                {/* ref will create a reference of inputRef object */}
                <input ref={inputRef2}/>

                <br />
                <button onClick={handleClick3}>
                    Click me 3!
                </button>
                {/* ref will create a reference of inputRef object */}
                <input ref={inputRef3}/>
            </div>)

}

export default MyComponent