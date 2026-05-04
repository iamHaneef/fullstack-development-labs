import { useEffect, useRef } from "react";

function UseRef() {

    const inputRef1 = useRef(null);
    const inputRef2 = useRef(null);

    useEffect(() => {

        console.log("Render Now");
        console.log(inputRef1.current.focus());

    })

    function handleClick1() {
        inputRef1.current.focus();
        inputRef1.current.style.backgroundColor = "red";
        inputRef2.current.style.backgroundColor = "";
    }
    function handleClick2() {
        inputRef2.current.focus();
        inputRef2.current.style.backgroundColor = "red";
        inputRef1.current.style.backgroundColor = "";
    }


    return (
        <div>
            <button onClick={handleClick1}>Click Me !</button>
            <input ref={inputRef1} /><br />

            <button onClick={handleClick2}>Click Me !</button>
            <input ref={inputRef2} /><br />

        </div>
    )
}

export default UseRef;