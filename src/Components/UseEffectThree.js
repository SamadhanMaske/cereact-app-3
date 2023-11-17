
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

function UseEffectThree() {
    const [x, setX] = useState(0);
    const [y, setY] = useState(0);

    const logMousePosition = e=>{
        console.log('Mouse event');
        setX(e.clientX);
        setY(e.clientY);
    }
    useEffect(()=>{
        console.log("Use-Effect called");
        window.addEventListener('mousemove', logMousePosition);

        //Clean up function
        return ()=>{
            console.log("Use-Effect componentWillUnmount");
            window.removeEventListener('mousemove', logMousePosition);
        }
    }, [])
    return (
        <div>
            Hooks X - {x}  Y- {y}
        </div>
    )
}

export default UseEffectThree