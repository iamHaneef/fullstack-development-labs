import { useCallback, useState } from "react";

function Count() {

    const [count, setCount] = useState();

    const IncrementButton = useCallback(() => {
        setCount(prev => prev + 1);
        console.log("Increment button clicked");
    }, [count]);

    const DecrementButton = useCallback(() => {
        setCount(prev => prev - 1);
        console.log("Decrement button clicked");
    }, [count]);

    return (
        <div>
            <h1>Count Increment</h1>
            <button onClick={IncrementButton}>Increment</button>
            <button onClick={DecrementButton}>Decrement</button>
        </div>
    )
}
export default Count;