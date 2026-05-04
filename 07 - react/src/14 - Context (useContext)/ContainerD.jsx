import { useContext } from "react";
import {userContext}from "./ContainerA"
function ContainerD(prop) {

    const user = useContext(userContext);
    return (
        <div style={{ border: "1px solid black", padding: "20px 10px" }}>
            <h1>Container D</h1>
            <h3>{`Bye ${user}`}</h3>
        </div>
    )
}

export default ContainerD;