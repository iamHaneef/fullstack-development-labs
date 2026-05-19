import { useReducer } from "react";

const initialState = {
    count: 0
};

const reducer = (state, action) => {

    switch (action.type) {

        case "Increment":
            return {
                count: state.count + action.payload
            };

        case "Decrement":
            return {
                count: state.count - action.payload
            };

        case "Reset":
            return {
                count: 0
            };

        default:
            return state;
    }
};

function CounterDemo() {

    const [state, dispatch] = useReducer(
        reducer,
        initialState
    );

    return (
        <div>

            <h1>{state.count}</h1>

            <button
                onClick={() => dispatch({ type: "Increment", payload: 5 })
                }
            >
                Increment By 5
            </button>

            <button
                onClick={() =>
                    dispatch({
                        type: "Decrement",
                        payload: 2
                    })
                }
            >
                Decrement By 2
            </button>

            <button
                onClick={() =>
                    dispatch({
                        type: "Reset"
                    })
                }
            >
                Reset
            </button>

        </div>
    );
}

export default CounterDemo;