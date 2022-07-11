import React from 'react'

const Display = (props) => {
    return (
        <>
            <h3>Display</h3>
            {JSON.stringify(props.things)}
            <div>
                {props.things.map((oneThing, index) => {
                    return (
                        <div style={{backgroundColor: oneThing.color}} key={index}>
                            {oneThing.color}
                        </div>
                    )
                })}
            </div>
        </>

    )
}

export default Display