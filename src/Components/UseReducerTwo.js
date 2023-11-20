

import React, { useReducer } from 'react'

const initialState = {
    firstCount: 0,
    secondCount: 10
};
const reducer = (state, action) => {
    switch (action.type) {
        case 'increment':
            return { ...state, firstCount: state.firstCount + action.value };
        case 'decrement':
            return { ...state, firstCount: state.firstCount - action.value };
        case 'increment-2':
            return { ...state, secondCount: state.secondCount + action.value };
        case 'decrement-2':
            return { ...state, secondCount: state.secondCount - action.value };
        case 'reset':
            return initialState;
        default:
            return state;
    }
}

function UseReducerTwo() {
    const [count, dispatch] = useReducer(reducer, initialState);
    // count is state object and dispatch is method capable of acception action as argument
    // argument to dispatch method is the action specified in reducer method
    return (
        <div>
            <div>Count-1:  {count.firstCount}</div>
            <div>Count-2:  {count.secondCount}</div>
            <div>
                <button onClick={() => dispatch({ type: 'increment', value: 1 })}>Increment-11</button>
                <button onClick={() => dispatch({ type: 'decrement', value: 1 })}>Decrement-11</button>
                <button onClick={() => dispatch({ type: 'increment', value: 5 })}>Increment-15</button>
                <button onClick={() => dispatch({ type: 'decrement', value: 5 })}>Decrement-15</button>
            </div>
            <div>
                <button onClick={() => dispatch({ type: 'increment-2', value: 1 })}>Increment-21</button>
                <button onClick={() => dispatch({ type: 'decrement-2', value: 1 })}>Decrement-21</button>
                <button onClick={() => dispatch({ type: 'increment-2', value: 5 })}>Increment-25</button>
                <button onClick={() => dispatch({ type: 'decrement-2', value: 5 })}>Decrement-25</button>
            </div>
            <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
        </div>
    )
}

export default UseReducerTwo