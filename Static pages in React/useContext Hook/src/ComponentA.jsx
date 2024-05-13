// PROVIDER COMPONENT , So import the createContext here

import { useState , createContext} from "react"
import ComponentB from "./ComponentB"



export const userContextFromA = createContext()

function ComponentA(){

    const [user, setUser] = useState("ASR")

    return(<div className="box">
        <h1>ComponentA</h1>
        <h2>{`Hello ${user}`}</h2>

        {/* Component B is inside of component A
        Also we are passing in props -->user = {user} 
        <ComponentB user = {user}/>*/}


        {/* Now without using props --> using createContext */}
        <userContextFromA.Provider value={user}>
        <   ComponentB user = {user}/>
        </userContextFromA.Provider>
    </div>)
}

export default ComponentA