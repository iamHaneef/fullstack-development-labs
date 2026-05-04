import { useState } from "react";

function UpdateArrayofObject() {

    const [cars, setCars] = useState([]);
    const [year, setYear] = useState(new Date().getFullYear());
    const [make, setMake] = useState("");
    const [model, setModel] = useState("");

    const HandleAddCars = () =>{
        const newCar = {
            years : year,
            makes : make,
            models : model
        }
        setCars(cars => [...cars , newCar]);

        setYear = new Date().getFullYear();
        setMake = "";
        setModel = "";
    }

    const HandleYear = (e) => {
        setYear(e.target.value);
    }
    const HandleMake = (e) => {
        setMake(e.target.value);
    }
    const HandleModel = (e) => {
        setModel(e.target.value);
    }

    const HandleRemove = (index) =>{
        setCars(car => car.filter((ele ,  currentIndex)=> currentIndex !== index));
    }

    return (
        <div>
            <h2>List of Car Items</h2>

            <ul>
                {cars.map((car , index) => (<li  key={index} onClick={() => HandleRemove(index)}>{car.years} {car.makes} {car.models} </li>))}
            </ul>

            <input type="number" value={year} onChange={HandleYear} />
            <br />
            <input type="text" value={make} placeholder="Type a Make" onChange={HandleMake} />
            <br />
            <input type="text" value={model} placeholder="Type a Model" onChange={HandleModel} />
            <br />

            <button onClick={HandleAddCars}>Add Car Details</button>

        </div>
    )
}

export default UpdateArrayofObject;