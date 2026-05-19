import React, { useReducer, useState } from "react";

const initialState = {
    todos: []
};

const reducer = (state, action) => {

    switch (action.type) {

        case "ADD_TODO":
            return {
                todos: [...state.todos, {
                    id: Date.now(),
                    text: action.payload
                }]
            };

        case "DELETE_TODO":
            return {
                todos: state.todos.filter(prev => prev.id !== action.payload)
            }


        default:
            return state;
    }
};

function TodoApp() {

    const [input, setInput] = useState("");

    const [state, dispatch] = useReducer(
        reducer,
        initialState
    );

    return (
        <div>
            <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
            />

            <button
                onClick={() => {
                    dispatch({
                        type: "ADD_TODO",
                        payload: input
                    });
                    setInput("");
                }}
            >
                Add Todo
            </button>

            {state.todos.map(todo => (
                <div key={todo.id}>
                    {todo.text}
                    <button onClick={() => dispatch({
                        type: "DELETE_TODO",
                        payload: todo.id
                    })}>
                        Delete
                    </button>
                </div>

            ))}


        </div>
    );
}

export default TodoApp; 