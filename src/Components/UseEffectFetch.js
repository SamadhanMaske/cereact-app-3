import axios from "axios";

import React from 'react'
import { useEffect } from "react";
import { useState } from "react";

function UseEffectFetch() {
    const [post, setPost] = useState({});
    const [id, setId] = useState(1);
    const [idFromButton, setIdFromButton] = useState(1);

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${idFromButton}`)
            .then(res => {
                console.log(res);
                setPost(res.data);
            })
            .catch(error => {
                console.log(error);
            })
    }, [idFromButton]);  //Effect depends on id

    const clickHandle = ()=>{
        setIdFromButton(id)
    }
    return (
        <div>
            <input type="text" value={id} onChange={e=>setId(e.target.value)}/>
            <button type=" submit" onClick={clickHandle}>Submit</button>
            <div>{post.title}</div>
            {/* <ul>
                {posts.map(post => (
                    <li key={post.id}>{post.title}</li>
                ))
                }
            </ul> */}
        </div>
    )
}

export default UseEffectFetch