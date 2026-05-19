export const increment = () => {
    return {
        type: "INCREMENT"
    };
};

export const decrement = () => {
    return {
        type: "DECREMENT"
    };
};

export const reset = () => {
    return {
        type: "RESET"
    };
};

export const incrementByAmount = (value) => {
    return {
        type: "INCREMENT_BY_AMOUNT",
        payload: value
    };
};