
import React from 'react'

function POTitle() {
    console.log("Title rendering");

    return (
        <div>
            <h1>useCallback Hook</h1>
        </div>
    )
}

export default React.memo(POTitle);