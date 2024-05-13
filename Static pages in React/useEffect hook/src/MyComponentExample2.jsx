
//we have to import useEffect 
import React, {useState, useEffect} from "react";



function MyComponentExample2(){

    const [width, setWidth] = useState(window.innerWidth)
    const [height, setHeight] = useState(window.innerHeight)

//-------------------------------------------------------------------------------
    // changing value of size using event Listener
    // window.addEventListener(event, function)
    // see the console. We have added more than 1000 event listeners and thats not good
    /*window.addEventListener("resize", handleResize)
    console.log("event listener added")*/
//------------------------------------------------------------------------


// Now using useEffect() condition 2. (just render one time)

    useEffect(() => {
        window.addEventListener("resize", handleResize)
        console.log("event listener added")

        // useEffect has another use.  Adding a return statemntt to do any cleanup (Doing unmounting)
        return() => {
            window.removeEventListener("resize", handleResize)
            console.log("event listener removeed")

        }
    }, [])

    // we can have more than one useEffect in our component
        useEffect(() => {
            document.title = `size: ${width} x ${height}`
        }, [width, height])



    function handleResize()
    {
        setWidth(window.innerWidth)
        setHeight(window.innerHeight)
    }
    

    return(<>
        <p>window Width: {width}px</p>
        <p>window height: {height}px</p></>)
}

export default MyComponentExample2