import { useState } from "react";
import styles from "./Style.module.css"

function Change() {

    const [name, setName] = useState("Guest");
    const [age, setAge] = useState(0);
    const [comment, setComment] = useState("");
    const [payment, setPayment] = useState();
    const [status, setStatus] = useState();

    const NameChange = (e) => {
        setName(e.target.value);
    }
    const ageChange = (e) => {
        setAge(e.target.value);
    }
    const CommentChange = (e) => {
        setComment(e.target.value);
    }
    const PaymentMehod = (e) => {
        setPayment(e.target.value);
    }
    const StatusFind = (e) => {
        setStatus(e.target.value);
    }
    return (
        <div className={styles.container}>

            <div className={styles.cards}>
                <input value={name} onChange={NameChange} type="text"></input>
                <p>Name is : {name}</p>
            </div>

            <div className={styles.cards}>
                <input value={age} onChange={ageChange} type="number" ></input>
                <p>Age is : {age}</p>
            </div>

            <div className={styles.cards}>
                <textarea value={comment} placeholder="Type Something" onChange={(e) => CommentChange(e)} />
                <p>Review : {comment}</p>
            </div>

            <div className={styles.select}>
                <select value={payment} onChange={PaymentMehod}>
                    <option value="">Select Payment Method</option>
                    <option value="Debit Card">DebitCard</option>
                    <option value="Credit Card">Credit Card</option>
                    <option value="Net Banking">Net Banking</option>
                    <option value="Cash On Delivery">Cash On Delivery</option>
                </select>

                <p className={styles.para1}>Payment Method is : {payment}</p>
            </div>

            <div className={styles.radio}>
                <h3>Order Status</h3>
                <label>
                    <input type="radio" value="Pick Up" checked={status === "Pick Up"}
                        onChange={StatusFind}></input>
                    Pick Up
                </label>
                <br />
                <label>
                    <input type="radio" value="Delivery" checked={status === "Delivery"}
                        onChange={StatusFind}></input>
                    Delivery
                </label>

                <p className={styles.para2}>Status is : {status}</p>
            </div>

        </div>
    )

}

export default Change;