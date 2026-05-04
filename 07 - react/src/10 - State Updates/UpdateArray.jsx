import { useState } from "react";

function UpdateArray() {

    const [foods, setFoods] = useState(["Apple" , "Orange" , "Grapes"]);

    const HandleAddItems = (e) =>{
        const newItem = document.getElementById("GetItems").value;
        document.getElementById("GetItems").value = "";
        setFoods([...foods , newItem]);
    }

    const HandleRemoveItems = (Index) =>{
        setFoods(foods.filter((ele , currentIndex) => currentIndex !== Index))
    }
    
    return (
        <div>
            <h2>List of Foods</h2>

            <ul>
                {foods.map((el, index) => (<li key={index} onClick={(e) => HandleRemoveItems(index)}> {el} </li>))}
            </ul>

            <input type="text" id="GetItems"  placeholder="Type a Food Name"  />
            
            <button onClick={HandleAddItems}>Add Food Items</button>
        </div>
    )

}

export default UpdateArray;