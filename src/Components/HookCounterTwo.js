// useState with previous state

import React, { useState } from 'react'

function HookCounterTwo() {
    const initialCount = 0;
    const [count, setCount] = useState(initialCount);

    const incrementByFive = ()=>{
        for(let i=1;i<=5;i++){
            setCount(prevCount=>prevCount+1);
        }
    }

    return (
        <div>
            Count: {count}
            <button onClick={()=>setCount(prevCount=> prevCount+1)}>Increment</button>
            <button onClick={()=>setCount(prevCount=> prevCount-1)}>Decrement</button>
            <button onClick={incrementByFive}>IncrementByFive</button>
        </div>
    )
}

export default HookCounterTwo