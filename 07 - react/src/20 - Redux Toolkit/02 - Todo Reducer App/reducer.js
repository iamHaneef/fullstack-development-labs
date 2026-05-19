import initialState from "./initialState";

function reducer(state, action) {

    switch (action.type) {

        case "ADD_TODO":

            const newTodo = {
                id: Date.now(),
                text: action.payload,
                completed: false
            };

            return {
                todos: [...state.todos, newTodo]
            };

        case "DELETE_TODO":

            return {
                todos: state.todos.filter(todo => todo.id !== action.payload)
            };

        case "TOGGLE_TODO":
            return {
                todos: state.todos.map((todo) => {

                    if (todo.id === action.payload) {
                        return {
                            ...todo,
                            completed: !todo.completed
                        };
                    }

                    return todo;
                })
            };
        default:
            return state;
    }
}

export { reducer, initialState };