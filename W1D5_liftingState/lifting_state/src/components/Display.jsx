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
            {JSON.stringify(props.animals)}
            <div>
                {
                    props.animals.map((animal, idx) => {
                        return (
                            <p key={idx}>{idx+1} -- {animal}</p>
                        )
                    })
                }
            </div>
        </fieldset>
    )
}

export default Display