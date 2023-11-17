
import React, { Component } from 'react'

class ClassEffectTwo extends Component {
    constructor(props) {
        super(props)

        this.state = {
            count: 0,
            name: ''
        }
    }

    componentDidMount() {
        document.title = `Clicked ${this.state.count} times`;
    }

    componentDidUpdate(prevProps, prevState) {
        //We are updating the title for every character change
        // document.title = `Clicked ${this.state.count} times`;
        // console.log("Document updated")
        //To prevent this we will simply use the if condition
        if (prevState.count !== this.state.count) {
            document.title = `Clicked ${this.state.count} times`;
            console.log("Document updated")
        }
    }

    render() {
        return (
            <div>
                <input type='text' value={this.state.name} onChange={e => { this.setState({ name: e.target.value }) }} />
                <button onClick={() => this.setState({ count: this.state.count + 1 })}>
                    Click count {this.state.count}
                </button>
            </div>
        )
    }
}

export default ClassEffectTwo