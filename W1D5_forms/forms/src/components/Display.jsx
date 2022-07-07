import React from 'react'

const Display = (props) => {
    return (
        <fieldset>
            <legend>Display.jsx</legend>
            <p>
                username: {JSON.stringify(props.user)}
            </p>


        </fieldset>
    )
}

export default Display