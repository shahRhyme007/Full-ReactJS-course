
import React, {useState} from "react"

function ColorPicker(){
    const [color, setColor] = useState("#FFFFFF")

    function handleColorChange(event)
    {
        setColor(event.target.value)
    }


    return (
        <div className="color-picker-container">
            <h1>Color Picker</h1>
            {/* with any CSS properties is JS we need to enclose them with in an object- so we will use a double set of curly braces */}
            <div className="color-display" style={{backgroundColor: color}}>
                 <p>Selected Color: {color}</p>
            </div>

            <label>Select a Color: </label>
            <input type="color" value={color} onChange={handleColorChange}/>
        </div>)

}

export default ColorPicker