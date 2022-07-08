import React from 'react'

const Display = (props) => {
    // console.log(props);
    // console.log(animals);
    // const {animals} = props;
    // console.log(animals);
    // console.log(props.animals);

    // console.log(props.animals);

    return (
        <fieldset>
            <legend>Display.jsx</legend>
            {/* {JSON.stringify(props.people)} */}
            <div>
                {
                    props.people.map((person, idx) => {
                        return (
                            <div key={idx}>
                                <p>
                                {person.name}    
                                </p>
                                {person.age}
                                <hr />
                            </div>
                        )
                    })
                }
            </div>
        </fieldset>
    )
}

export default Display