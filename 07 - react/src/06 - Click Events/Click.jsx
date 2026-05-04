import styles from "./Style.module.css"
let count = 0;
function Click() {

    const handleClick = (e) => {
        if (count < 3) {
            count++;
            e.target.textContent = `You clicked ${count} Times`;
        }
        else {
            e.target.textContent = `Stop Clicking me`;
        }
    }

    return (
        <>
            <button onClick={(e) => handleClick(e)}
                className={styles.button}>Submit</button>
        </>
    )
}

export default Click;