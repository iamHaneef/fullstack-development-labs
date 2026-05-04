import styles from './Condition.module.css'
import PropTypes from 'prop-types';
function Condition({
    isLogged = false,
    username = "Guest"
}) {

    //we render the result based on our conditions

    let result1 = <h1 className={styles.result1}>Welcome {username}</h1>;
    let result2 = <h1 className={styles.result2}>Please Login Properly</h1>;

    if (isLogged) {
        return result1;
    }
    else {
        return result2;
    }
}

Condition.proptypes = {
    isLogged : PropTypes.bool,
    username : PropTypes.string,
}

export default Condition;