import {useState } from "react";
import styles from "./Style.module.css"

function Counter() {

    const [count, setCount] = useState(0);

    const Increment = () => {
        setCount(count + 1);
    }

    const Decrement = () => {
        if (count > 0) {
            setCount(count - 1);
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

export default Counter;