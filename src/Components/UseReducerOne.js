
import React, { useReducer } from 'react'

const initialState = 0;
const reducer = (state, action) => {
    switch (action) {
        case 'increment':
            return state + 1;
        case 'decrement':
            return state - 1;
        case 'reset':
            return initialState;
        default:
            return state;
    }
}

function UseReducerOne() {
    const [count, dispatch] = useReducer(reducer, initialState);
    // count is state object and dispatch is method capable of acception action as argument
    // argument to dispatch method is the action specified in reducer method
    return (
        <div>
            <div>Count {count}</div>
            <button onClick={() => dispatch('increment')}>Increment</button>
            <button onClick={() => dispatch('decrement')}>Decrement</button>
            <button onClick={() => dispatch('reset')}>Reset</button>
        </div>
    )
}

export default UseReducerOne