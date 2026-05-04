import styles from "./List.module.css";
import PropTypes from "prop-types";

function List(props) {

    let itemItems = props.items; // array object
    let itemCategory = props.category; // category name


    // //filtered array by calories 
    // const lowCalories = fruits.filter(fruit => fruit.calories < 100);
    // const highCalories = fruits.filter(fruit => fruit.calories > 100);

    //sorting techniques
    // itemItems.sort((a, b) => a.name.localeCompare(b.name));
    // itemItems.sort((a, b) => b.name.localeCompare(a.name));
    // itemItems.sort((a, b) => a.calories - b.calories);
    // itemItems.sort((a, b) => b.calories - a.calories);


    // to access a object use map with key for unique picking

    const fruitsItems = itemItems.map(fruit =>
        <li key={fruit.id}>
            {fruit.name.toUpperCase()} : &nbsp;
            <b> {fruit.calories} </b>
        </li>);

    return (
        <>
            <h2 className={styles.heading}>{itemCategory}</h2>
            <ul className={styles.value}>{fruitsItems}</ul>

        </>
    )
}

//this proptypes error will show only in Console.log

List.propTypes = {
    category: PropTypes.string,
    items: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
        calories: PropTypes.number

    }))


}

export default List;