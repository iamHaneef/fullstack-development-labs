import { useReducer } from "react";

import { reducer, initialState } from "./reducer";

import {
    increment,
    decrement,
    reset,
    incrementByAmount
} from "./actions";

function Counter() {

    const [state, dispatch] =
        useReducer(reducer, initialState);

    return (

        <div>

            <h1>Count : {state.count}</h1>

            <button
                onClick={() =>
                    dispatch(increment())
                }
            >
                Increment
            </button>

            <button
                onClick={() =>
                    dispatch(decrement())
                }
            >
                Decrement
            </button>

            <button
                onClick={() =>
                    dispatch(reset())
                }
            >
                Reset
            </button>

            <button
                onClick={() =>
                    dispatch(incrementByAmount(5))
                }
            >
                Increment By 5
            </button>

        </div>
    );
}

export default Counter;