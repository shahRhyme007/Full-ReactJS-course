// WE HAVE TO IMPORT THE REACT HOOK LIBRARY. 
// WE WOULD USE OBJECT DESTRUCTING TO IMPORT THE useState FUNCTION FROM THE REACT LIBRARY

import React, {useState} from "react"



// the useState function returns an array with two elements (a variable and a setter function)
// we would use a set of brackets for array destructuring

function MyComponent() {
    
    const [name, setName] = useState("Guest") //initailly set to "Guest"
    const [age, setAge] = useState(0) 
    const [isEmployed, setIsEmployed] = useState(false) 

    const updateName = () => {
        setName("Rhyme") //setName function has the variable "name" storing Rhyme
     }

    const updateAge = () => {
        setAge(age + 1) 
     }

    const employeeStatus = () => {
        setIsEmployed(!isEmployed) 
    }


   


    return (
        <div>
            <p>Name: {name}</p>
            <button onClick={updateName}>Set Name</button>


            <p>Age: {age}</p>
            <button onClick={updateAge}>Increment Age</button>
        
            <p>Is Employed: {isEmployed ? "Yes" : "No"}</p>
            <button onClick={employeeStatus}>Employee Status</button>
        
            <hr color="pink"  />
        </div>
)

}
export default MyComponent