
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

function UseEffectOne() {
    const [count, setCount] = useState(0);

    useEffect(()=>{
        document.title= `You clicked ${count} times`;
    })
    return (
        <div>
            <button>Click Count {count}</button>
        </div>
    )
}

export default UseEffectOne