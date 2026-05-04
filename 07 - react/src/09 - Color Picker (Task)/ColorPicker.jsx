import { useState } from "react";
import "./ColorPicker.css"

function ColorPicker() {

    //color picker take by input

    const [color, setColor] = useState("#ffffff");

    //here we are working that event without touch its previous state
    function HandleColorChange(e) {
        setColor(() => e.target.value);
    }
    return (
        <div className="colors" >
            <div className="para" style={{ backgroundColor: color}}>
                <p className="color_para">The Color Shown is : {color}</p>
            </div>

            <label for="Choose the Color">Choose the Color

                <input type="color" value={color} onChange={HandleColorChange} />
            </label>
        </div>
    )
}

export default ColorPicker;