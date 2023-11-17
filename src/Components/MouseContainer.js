
import React from 'react'
import { useState } from 'react'
import UseEffectThree from './UseEffectThree';

function MouseContainer() {
    const [display, setDisplay] = useState(true);

  return (
    <div>
        <button onClick={()=>setDisplay(!display)}>Toggle Display</button>
        {display && <UseEffectThree/>}    
    </div>
  )
}

export default MouseContainer