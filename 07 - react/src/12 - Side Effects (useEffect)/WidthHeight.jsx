import { useEffect, useState } from "react";

function WidthHeight() {

    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);
    const [color, setColor] = useState("red");

    useEffect(() => {
        window.addEventListener("resize", HandleResize);
        console.log("EVENT ADDED")

        return () => {
            window.removeEventListener("resize", HandleResize);
            console.log("EVENT Removed")
        }
    },[])


    useEffect(() => {
        document.title = `Window size is ${width} x ${height}`
    })



    function HandleResize() {
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
    }

    return (
        <div>
            <p style={{ color: color }}>Windows Width : {width} </p>
            <p style={{ color: color }}>Windows Height : {height}</p>
        </div>
    )
}

export default WidthHeight;