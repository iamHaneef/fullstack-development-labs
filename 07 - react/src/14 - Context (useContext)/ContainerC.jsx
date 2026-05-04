import ContainerD from "./ContainerD";
import { useContext } from "react";
import { userContext } from "./ContainerA";
function ContainerC()
{

    const author = useContext(userContext);
    return(
       <div style={{border : "1px solid black" , padding: "20px 10px"}}>
            <h1>Container C</h1>
            <h3>{`Welcome to Fight Club by ${author}`}</h3>
            <ContainerD />
        </div>
    )
}

export default ContainerC;