
import React, { Component } from 'react'

class ClassCounterTwo extends Component {
    constructor(props) {
        super(props)

        this.state = {
            count: 0,
        }
    }

    clickHandler=()=>{
        this.setState((prevState)=>{
            return {count: prevState.count + 1}
        })
    }

    render() {
        const { count } = this.state;
        return (
        <div>
            <button onClick={this.clickHandler}> Class Count {count} </button>
        </div>
        )
    }
}

export default ClassCounterTwo