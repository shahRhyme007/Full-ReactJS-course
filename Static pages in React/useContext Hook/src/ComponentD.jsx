// CONSUMER COMPONENT so import userContextFromA

import React, {useContext} from "react"
import {userContextFromA} from "./ComponentA.jsx"



function ComponentD(){

    const user = useContext(userContextFromA)


    return(<div className="box">
        <h1>ComponentD</h1>
        {/* moving the value of user from component A to D is called props drilling
        There is a better solution than this : useContext() */}
        <h2>{`Bye ${user}`}</h2>
    </div>)
}

export default ComponentD