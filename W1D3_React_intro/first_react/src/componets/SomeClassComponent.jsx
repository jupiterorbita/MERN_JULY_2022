import React, { Component } from 'react';

class SomeClassComponent extends Component {

    render() {
        console.log("what this component has received = ", this.props);
        console.log("the key x that was passed from app.js x=", this.props.x);
        return (
            <fieldset> 
                <legend>SomeClassComponent.jsx</legend>
                <h4>hello</h4>
                <p>This is our first class component.</p>
                app.js gave me x, and x is {this.props.x} 
                <hr />
                <p>
                    message: {this.props.msgFromApp}
                </p>
            </fieldset>
            
            );
    }
}
    
export default SomeClassComponent;