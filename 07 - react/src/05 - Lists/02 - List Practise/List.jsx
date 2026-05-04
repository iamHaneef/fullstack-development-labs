import styles from "./List.module.css";

function List(props) {

    let ListItems = props.items;

    let filtered_ListItems = ListItems.filter(items => items.calories > 50 && items.calories < 600);

    let sortedList = filtered_ListItems.sort((a,b)=>{
        if(a.name === b.name)
        {
            return a.calories - b.calories;
        }
        return a.name.localeCompare(b.name);
    })

    const fruitItems = sortedList.map(item => <li key ={item.id}>
        {item.name.toUpperCase()} : &nbsp;
        <span> {item.calories !== null ? Number(item.calories) : 0}</span>
    </li>)

    return (
        <>
            <h1 className={styles.heading}>{props.category}</h1>
            <ul className={styles.value}>{fruitItems}</ul>
        </>
    )
}

export default List;