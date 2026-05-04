import { useState } from "react";

function UpdateObject() {

    const [watch, setWatch] = useState({
        year: 2020, make: "Rolex", model: "Premium"
    })

    function HandleYearChange(e)
    {
        setWatch(prev => ({...prev , year : e.target.value}))
    }

    const HandleMakeChange = (e) => {
        setWatch(prev => ({ ...prev , make : e.target.value}))
    }

    const HandleModelChange = (e) => {
        setWatch(prev => ({...prev , model : e.target.value}))
    }

    return (
        <div>
            <p>My Watch Model is : {watch.year} {watch.make} {watch.model}</p>

            <input type="number" value={watch.year} onChange={HandleYearChange}/>

            <br/><br/>
            
            <input type="text" value={watch.make} onChange={HandleMakeChange}/>

            <br/><br/>
            
            <input type="text" value={watch.model} onChange={HandleModelChange}/>

        </div>
    )
}

export default UpdateObject;