
import axios from 'axios';
import React, { useEffect, useReducer } from 'react'

const initialState = {
    loading: true,
    error: '',
    post: {}
}

const reducer=(state, action)=>{
    switch(action.type){
        case "FETCH_SUCCESS":
            return {
                loading: false,
                error: '',
                post: action.payLoad
            }
        case "FETCH_ERROR":
            return {
                loading: false,
                error: "Something went wrong",
                post: {}
            }
        default:
            return state;
    }
}

function URDataFetchingTwo() {
    const [currState, dispatch] = useReducer(reducer, initialState);
    useEffect(()=>{
        console.log("useEffect called");
        axios.get("https://jsonplaceholder.typicode.com/posts/1")
        .then((res)=>{
            dispatch({type:"FETCH_SUCCESS", payLoad: res.data });
        })
        .catch((error)=>{
            dispatch({type:"FETCH_ERROR"});
        })
    },[])
  return (
    <div>
        {currState.loading ? "Loading" : currState.post.title }
        {currState.error ? currState.error : null}
    </div>
  )
}

export default URDataFetchingTwo