import { useState } from "react";
import styles from "./Style.module.css"

function UpdateFunction() {
    const [count, setCount] = useState(0);

    const Increment = () => {

        //itdoesn't update the prev state and add 
        // setCount(count + 1);
        // setCount(count + 1);
        // setCount(count + 1);

        //so we use function Update by Arrow Funciton which get the current value and update
        setCount(c => c + 1); // 0 -> 1
        setCount(c => c + 1); // 1 + 1 -> 2
        setCount(c => c + 1); // 2 + 1 -> 3
    }

    const Decrement = () => {
        if (count > 0) {
            setCount(c => c - 1);
            setCount(c => c - 1);
            setCount(c => c - 1);
        }

    }

    const Reset = () => {
        setCount(0);
    }


    return (
        <div className={styles.container}>
            <p className={styles.head}>Count : <span>{count}</span></p>
            <div className={styles.card}>
                <button className={styles.button} onClick={Increment}>Increment</button>
                <button className={styles.button} onClick={Reset}>Reset</button>
                <button className={styles.button} onClick={Decrement}>Decrement</button>
            </div>
        </div>
    )
}




export default UpdateFunction;