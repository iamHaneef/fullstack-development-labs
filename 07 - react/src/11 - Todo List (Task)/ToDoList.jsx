import { useState } from "react";
import "./ToDoList.css"
function ToDoList() {

    const [task, setTask] = useState(["Code Morning", "Eat Healthy Food", "Walk 3km Daily", "Learn Programming"]);
    const [newtask, setNewtask] = useState("");

    //get input
    const HandleInputChange = (e) => {
        setNewtask(e.target.value);
    }
    //give that input to add
    const HandleAddItems = () => {
        if (newtask.trim() !== "") {
            setTask(c => [...c, newtask]);
            setNewtask("");
        }
    }
    //filter that input to delete
    const HandleDeleteItems = (index) => {
        const UpdatedItems = task.filter((ele, currentIndex) =>
            currentIndex !== index);
        setTask(UpdatedItems);
    }

    //move that ele by upward
    const HandleMoveUp = (index) => {

        //logic to move up
        if (index > 0) {
            const UpdatedTask = [...task];
            [UpdatedTask[index], UpdatedTask[index - 1]] =
                [UpdatedTask[index - 1], UpdatedTask[index]];

            setTask(UpdatedTask);
        }
    }
    //move that ele by downward
    const HandleMoveDown = (index) => {

        //logic to move up
        if (index < task.length - 1) {
            const UpdatedTask = [...task];
            [UpdatedTask[index], UpdatedTask[index + 1]] =
                [UpdatedTask[index + 1], UpdatedTask[index]];
            setTask(UpdatedTask);
        }
    }

    return (
        <div className="ToDoList" >
            <h2 >To-Do-List</h2>
            <div className="block">
                <div className="Section1">
                    <input type="text" value={newtask} placeholder="Enter a List..."
                        onChange={HandleInputChange} />
                    <button className="Add" onClick={HandleAddItems} >Add</button>
                </div>

                <ol className="Section2">
                    {task.map((tasks, index) => (
                        <li className="list" key={index}>
                            {tasks}
                            <button className="delete" onClick={() => HandleDeleteItems(index)} >Delete</button>
                            <button className="up" onClick={() => HandleMoveUp(index)} >⬆️</button>
                            <button className="down" onClick={() => HandleMoveDown(index)} >⬇️</button>

                        </li>
                    ))}
                </ol>
            </div>
        </div>
    )
}

export default ToDoList;