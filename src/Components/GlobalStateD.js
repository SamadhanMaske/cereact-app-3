
import React, { useContext } from 'react'
import { CountContext } from './GlobalState'

function GlobalStateD() {
    const countContext = useContext(CountContext);

    return (
        <div>
            GlobalStateD Count: {countContext.countState}
            <button onClick={() => countContext.countDispatch('increment')}>Increment</button>
            <button onClick={() => countContext.countDispatch('decrement')}>Decrement</button>
            <button onClick={() => countContext.countDispatch('reset')}>Reset</button>
        </div>
    )
}

export default GlobalStateD