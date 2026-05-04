import React, { useState, useMemo } from "react";

function ArrayCal() {
    const [count, setCount] = useState(10);
    const [arr, setArr] = useState([1, 2, 3, 5]);

    const findMax = () => {
        console.log("Find Max");
        return Math.max(...arr);
    }

    const memo = useMemo(() => {
        findMax();
    }, [arr])

    return (
        <div>
            <button onClick={() => { console.log(count); setCount(count + 1); }}>
                Increment
                {console.log("Rendering")}
            </button>
            <button onClick={() => { setArr([...arr, Math.round(count * Math.random())]); }}>
                Add Random to Array
                {console.log("Rendering")}
            </button>

            <p>{JSON.stringify(arr)}</p>
            <p>{memo}</p>
            <p>{count}</p>
        </div>
    );
}

export default ArrayCal;