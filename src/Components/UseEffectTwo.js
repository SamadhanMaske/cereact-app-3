
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

function UseEffectTwo() {
    const [count, setCount] = useState(0);
    const [name, setName] = useState('');

    useEffect(()=>{
        console.log("useEffect - Updating document");
        document.title = `You clicked ${count} times`
    }, [count])
    return (
        <div>
            <input type='text' value={name} onChange={e=>{setName(e.target.value)}}/>
            <button onClick={()=>{setCount(count+1)}}>
                Click count {count}
            </button>
        </div>
    )
}

export default UseEffectTwo