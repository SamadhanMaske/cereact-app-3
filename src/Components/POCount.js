import React from 'react'

function POCount({ text, count }) {  // destructuring Props
    console.log("Rendering ", text);
    return (
        <div>
            {text} - {count}
        </div>
    )
}

export default React.memo(POCount);