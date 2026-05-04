import styles from "./Style.module.css"
import panda from "./panda.jpg"
let count = 0;
const handleSubmit = (e) => {
    if (count < 3) {
        count++;
    }
    else
    {
        e.target.style.display = "none";
    }
}

function ImageClick() {
    return (
        <>
            <img src={panda} onClick={(e) => handleSubmit(e)}></img>
        </>
    )
}

export default ImageClick;