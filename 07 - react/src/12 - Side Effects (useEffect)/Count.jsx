import { use, useEffect, useState } from "react";


function Count() {

    const [count, setCount] = useState(0);
    const [color , setColor] = useState("Blue");

    useEffect(() => {
        document.title = `Count is ${count} ${color}`;
    }, [count , color])

    const Increment = () => {
        setCount(count + 1);
    }

    const Decrement = () => {
        if (count > 0) {
            setCount(count - 1);
        }

    }

    const Reset = () => {
        setCount(0);
    }

    const HandleColorChange = () => {
        setColor(color => color === "blue" ? "green" : "blue")
    }


    return (
        <div>
            <p style={{"color" : color}}>Count : <span>{count}</span></p>
            <div >
                <button onClick={Increment}>Increment</button>
                <button onClick={Reset}>Reset</button>
                <button onClick={Decrement}>Decrement</button> <br /><br />
                <button onClick={HandleColorChange}>Change Color</button>
            </div>
        </div>
    )
}

export default Count;