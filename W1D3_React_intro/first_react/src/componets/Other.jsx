import React, { Component } from 'react';

class Other extends Component{

    render() {
        console.log(this.props.animals);
        return (
            <fieldset>
                <legend>Other.jsx</legend>
                <h3>😎😎😎</h3>
                {
                    this.props.animals.map( (animal, index) => {
                        return <div key={index}>
                            <li>{index} - {animal}</li>
                        </div>
                    })
                }
            </fieldset>
        )
    }
}

export default Other;