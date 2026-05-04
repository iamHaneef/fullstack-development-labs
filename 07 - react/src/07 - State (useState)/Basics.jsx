import { useState } from "react";
import styles from "./Style.module.css"

//name set

function Basics() {

    const [name, setName] = useState("Guest");
    const [age, setAge] = useState(0);
    const [isStudent, setIsStudent] = useState(false);

    const setNameButton = () => {
        setName("Death");
    }

    const setAgeButton = () => {
        setAge(age + 1);
    }

    const setCheckButton = () => {
        setIsStudent(!isStudent);
    }


    return (
        <div>
            <p>Name : {name}</p>
            <button onClick={setNameButton}>Set Name Button</button>

            <p>Age : {age}</p>
            <button onClick={setAgeButton}>Set Age Button</button>

            <p>isStudent : {isStudent ? "No" : "Yes"}</p>
            <button onClick={setCheckButton}>Set Check Button</button>
        </div>
    )
}

export default Basics;