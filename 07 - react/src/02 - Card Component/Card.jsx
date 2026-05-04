import panda from './panda.jpg'
import styles from './Card.module.css'
function Card() {

    return (
        <div className={styles.card}>
            <img className={styles.img} src={panda} alt='panda' />
            <h2 className={styles.heading}>Kung Fu Panda</h2>
            <p className={styles.text}>The Kungfu Panda Movie has High Ratings in Netflix</p>
        </div>
    )
}

export default Card;
