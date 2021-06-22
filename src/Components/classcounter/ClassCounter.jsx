import React, { Component } from 'react';
import "./classcompostyles.css"

class ClassCounter extends Component {
    constructor (props) {
        super(props)
        this.state = {
            count:0,
        }

 

    }  

    handleIncrease = (event) => {
        event.preventDefault();
        this.setState({count: this.state.count + 1})

    }

    handleDecrease = (event) => {
        event.preventDefault();
        this.setState({count: this.state.count -1})
    }

    render() {
        
        return (
            <div className ="classcomp">
                <h1>CLASS COMPONENT EXAMPLE</h1>
                <h2>{this.state.count}</h2>
                <button onClick={this.handleIncrease}>handleIncrease</button>
                <button onClick={this.handleDecrease}>handleDecrease</button>
            </div>
        );
    }
}

export default ClassCounter;
