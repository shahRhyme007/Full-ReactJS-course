import ComponentD from "./ComponentD"

import React, {useContext} from "react"
import {userContextFromA} from "./ComponentA.jsx"


function ComponentC(){

    const user = useContext(userContextFromA)


    return(<div className="box">
        <h1>ComponentC</h1>
        <h2>{`Hi ${user}`}</h2>
        <ComponentD/>

    </div>)
}

export default ComponentC