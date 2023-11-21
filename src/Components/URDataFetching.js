
import React, { useEffect, useState } from 'react'
import axios from 'axios'

function URDataFetching() {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [post, setPost] = useState({});

    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/posts/1")
        .then(res=>{
            setLoading(false);
            setError('');
            setPost(res.data);
        })
        .catch(err=>{
            setLoading(false);
            setError('Something went wrong!!!');
            setPost({});
        },[])  //Dependency array to make sure that document get loaded only once
    })
    return (
        <div>
            {loading ? "Loading" : post.title}
            {error ? error: null}
        </div>
    )
}

export default URDataFetching