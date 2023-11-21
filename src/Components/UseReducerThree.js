
import React, { useReducer } from 'react'

const initialState = {
    firstCount: 0,
    secondCount: 10
};

const reducer = (state, action) => {
    switch (action.type) {
        case 'increment1':
            return { ...state, firstCount: state.firstCount + action.value };
        case 'decrement1':
            return { ...state, firstCount: state.firstCount - action.value };
        case 'reset1':
            return initialState;
        case 'increment2':
            return { ...state, secondCount: state.secondCount + action.value };
        case 'decrement2':
            return { ...state, secondCount: state.secondCount - action.value };
        case 'reset2':
            return initialState;
        default:
            return state;
    }
}

function UseReducerThree() {
    const [count, dispatch] = useReducer(reducer, initialState);
    const [countTwo, dispatchTwo] = useReducer(reducer, initialState);

    return (
        <div>
            <div>Count-1:  {count.firstCount}</div>
            <div>
                <button onClick={() => dispatch({ type: 'increment1', value: 1 })}>Increment-1</button>
                <button onClick={() => dispatch({ type: 'decrement1', value: 1 })}>Decrement-1</button>
                <button onClick={() => dispatch({ type: 'increment1', value: 5 })}>Increment-5</button>
                <button onClick={() => dispatch({ type: 'decrement1', value: 5 })}>Decrement-5</button>
                <button onClick={() => dispatch({ type: 'reset1' })}>Reset</button>
            </div>
            <div>Count-2:  {countTwo.secondCount}</div>
            <div>
                <button onClick={() => dispatchTwo({ type: 'increment2', value: 1 })}>Increment-1</button>
                <button onClick={() => dispatchTwo({ type: 'decrement2', value: 1 })}>Decrement-1</button>
                <button onClick={() => dispatchTwo({ type: 'increment2', value: 5 })}>Increment-5</button>
                <button onClick={() => dispatchTwo({ type: 'decrement2', value: 5 })}>Decrement-5</button>
                <button onClick={() => dispatchTwo({ type: 'reset2' })}>Reset</button>
            </div>

        </div>
    )
}

export default UseReducerThree