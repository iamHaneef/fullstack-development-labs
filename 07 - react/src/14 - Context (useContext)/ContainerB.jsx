import ContainerC from "./ContainerC";
function ContainerB()
{

    return(
         <div style={{border : "1px solid black" , padding: "20px 10px"}}>
            <h1>Container B</h1>
            <ContainerC />
        </div>
    )
}

export default ContainerB;