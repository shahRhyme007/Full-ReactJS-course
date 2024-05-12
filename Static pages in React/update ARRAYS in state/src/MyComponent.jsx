
import React, {useState} from "react"

function MyComponent(){

    const [foods , setFood ] = useState(["Apple", "orange", "banana"])

    function handleAddFood()
    {
        const newfood = document.getElementById("foodInput").value
        document.getElementById("foodInput").value = ""
        setFood(f => [...f , newfood])
    }


    
    function handleRemoveFood(index)
    {
        // _ means ignore that parameter 
        setFood(foods.filter((_, i ) => i != index))
        
    }



    return(
            <div>
                <h2>List of food</h2>

                <ul>
                    {/* array.mapMethod((parameters) => functionality) */}
                    {foods.map((food, index) =>
                         <li key={index}  onClick={() => handleRemoveFood(index)}>
                            {food}
                         </li>)}
                </ul>

                <input type="text" id="foodInput" placeholder="Enter food name" />
                <button onClick={handleAddFood}>Add Food </button>

            </div>
          )

}

export default MyComponent