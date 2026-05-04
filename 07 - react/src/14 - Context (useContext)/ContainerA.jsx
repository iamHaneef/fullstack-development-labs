import { useState } from "react";
import ContainerB from "./ContainerB";
import { createContext } from "react";

export const userContext = createContext();

function ContainerA() {

    const [user, setUser] = useState("Tyler Durden");

    return (
        <div style={{ border: "1px solid black", padding: "20px 10px" }}>
            <h1>Container A</h1>
            <h3>{user}</h3>
            <userContext.Provider value={user}>
                <ContainerB user={user} />
            </userContext.Provider>

        </div>
    )
}

export default ContainerA;