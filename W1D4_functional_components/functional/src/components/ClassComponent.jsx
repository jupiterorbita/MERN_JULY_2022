import React, { Component } from 'react'

class Person extends Component {

    // create defaults
    constructor(props) {
        super(props);
        // console.log(props);
        // create STATE
        this.state = {
            x: 3,
            cool: true,
            person: this.props.person
        }
    }

    buttonClick = () => {
        // console.log("clicked!!!!");
        this.setState({
            x: this.state.x + 1,
            person: {
                ...this.state.person,
                luckyNumber: this.state.person.luckyNumber + 1
            }
        }, () => console.log(this.state.x))
  
    }

    render() {
        // console.log(this.props.person);
        return (
            <fieldset>
                <legend>Class Component</legend>
                {JSON.stringify(this.state)}
                hello 🤺
                <hr />
                <p>
                    x state: {this.state.x}
                </p>
                <p>
                    luckyNumber person state: {this.state.person.luckyNumber}
                </p>
                <button onClick={() => this.buttonClick()}>click me</button>
            
                {
                    this.state.person.luckyNumber > 20 ? 
                        this.state.x > 20 ? 
                         <p>woohoo TO BOTH OF YOU!!!! </p> : 
                        <p>woohoo 🎈🎈🎈🎈🎈</p> 
                        : <p>keep clicking</p>
                }
            </fieldset>
        )
    }
}

export default Person;