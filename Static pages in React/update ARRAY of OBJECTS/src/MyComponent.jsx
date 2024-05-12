import React, {useState} from "react";

function MyComponent(){
    
    // iniial stae is an empty array in this case
    const [cars, setCars] = useState([])
    const [carYear, setCarYear] = useState(new Date().getFullYear())
    const [carMake, setCarMake] = useState("")
    const [carModel, setCarModel] = useState([])

    function handleAddCar()
    {
        const newCar = {
            year: carYear, 
            make: carMake, 
            model: carModel
        }
        // we have to use the first letter of the variable  cars (not mandatory though)
        setCars(c => [...c, newCar])

        // reseting the input boxes 
        setCarYear(new Date().getFullYear())
        setCarMake("")
        setCarModel("")

    }

    // what is the index of the object that we are removing from this array
    function handleRemoveCar(index)
    {
        setCars(c => c.filter((_, i) => i !==index))

    }

    function handleYearChange(event)
    {
        setCarYear(event.target.value)

    }

    function handleMakeChange(event)
    {
        setCarMake(event.target.value)

    }

    function handleModelChange(event)
    {
        setCarModel(event.target.value)


    }



    return(<div>
        <h2>List of Car Objects </h2>

        <ul>
            {/* populating the unorder list with list items */}
            {cars.map((car, index) => 
                    <li key={index} onClick={() => handleRemoveCar(index)}>
                        {car.year} {car.make} {car.model}

                    </li>)}

        </ul>

        <input type="number"  value={carYear} onChange={handleYearChange}/> <br />
        <input type="text"  placeholder= "Enter Car Make"   value={carMake} onChange={handleMakeChange}/> <br />
        <input type="text"  placeholder= "Enter Car Model"   value={carModel} onChange={handleModelChange}/> <br />
        <button onClick={handleAddCar}>Add Car</button>
    </div>)


}

export default MyComponent