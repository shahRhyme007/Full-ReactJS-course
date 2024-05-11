import React, {useState} from "react";

function MyComponent(){

    // HERE car is the object with the three properties

    const  [car, setCar] = useState({year: 2024, 
                                    make: "Ford", 
                                    model: "Mustang"})


    function handleYearChange(event){
        //setCar will have an object with all the properties
        //the spread operator: spread all of the current properties of our car and add a year
        // setCar({...car, year: event.target.value})

        // better practice is to use an updater function
        setCar(c => ({...c, year: event.target.value}))


        // we can also do this with out our spread operator but our code will look complex
        //there are two duplicate years so the later one will be used 
        // setCar({year: 2024, make: "Ford", model: "Mustang", year: 2025})
    }
    function handleMakeChange(event){
        setCar(c => ({...c, make: event.target.value}))
    }
    function handleModelChange(event){
        setCar(c => ({...c, model: event.target.value}))

    }


    return(<div>

                <input type="number" value={car.year} onChange={handleYearChange} /> <br />
                <input type="text" value={car.make} onChange={handleMakeChange}/>  <br />
                <input type="text" value={car.model} onChange={handleModelChange}/> <br />

                <p>Your Favorite car is: {car.year} {car.make} {car.model}</p>
    </div>)


}

export default MyComponent