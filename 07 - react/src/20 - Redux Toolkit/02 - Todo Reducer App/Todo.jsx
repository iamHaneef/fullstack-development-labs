import { useReducer, useState } from "react";

import { reducer, initialState } from "./reducer";

import {
    addTodo,
    deleteTodo,
    toggleTodo
} from "./actions";

function Todo() {

    const [state, dispatch] =
        useReducer(reducer, initialState);

    const [input, setInput] = useState("");

    const handleAddTodo = () => {

        if (input.trim() === "") return;

        dispatch(addTodo(input));

        setInput("");
    };

    return (
        <div>
            <h1>Todo App</h1>

            <input
                type="text"
                placeholder="Enter todo"
                value={input}
                onChange={(e) =>
                    setInput(e.target.value)
                }
            />

            <button onClick={handleAddTodo}>
                Add Todo
            </button>

            <hr />

            {
                state.todos.map((todo) => (

                    <div key={todo.id}>

                        <h3
                            style={{
                                textDecoration: todo.completed ? "line-through" : "none"
                            }}
                        >
                            {todo.text}
                        </h3>

                        <button
                            onClick={() =>
                                dispatch(toggleTodo(todo.id))
                            }
                        >
                            Toggle
                        </button>

                        <button
                            onClick={() =>
                                dispatch(deleteTodo(todo.id))
                            }
                        >
                            Delete
                        </button>

                    </div>
                ))
            }

        </div>
    );
}

export default Todo;