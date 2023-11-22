// useState with object
// useState does not automatically merge and updates object while setState does

import React, { useState } from 'react'

function HookCounterThree() {
    const [name, setName] = useState({ firstName: '', lastName: '' });

    return (
        <div>
            <form>
                <input type='text' value={name.firstName} onChange={e=> setName({...name, firstName: e.target.value})}/>
                <input type='text' value={name.lastName} onChange={(e)=> setName({...name, lastName: e.target.value})}/>
            </form>
            <h1>First Name: {name.firstName}</h1>
            <h1>Last Name: {name.lastName}</h1>
        </div>
    )
}

export default HookCounterThree