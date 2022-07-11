import React from 'react'
import { useState } from 'react'

const Form = (props) => {

    const [color, setColor] = useState("")
    const [fromObj, setFormObj] = useState({})
    // const {setThings, things } = props;

    const createColor = (e) => {
        e.preventDefault();
        console.log(color);
        // props.setThings([...props.things, color])
        // const newColor = {
        //     color: color
        // }
        props.addColorToThings({
            color
        });
        console.log(fromObj);
    }

    // multiple inputs
    const getAll = (e) => {
        // const formObj = {
        //     [e.target.name]: [e.target.value]
        // }
        setFormObj({
            ...fromObj,
            [e.target.name]: e.target.value
        })
    }

    return (
        <fieldset>
            <h4>Form</h4>
            form color : {JSON.stringify(color)} <br />
            formObj : {JSON.stringify(fromObj)} <br />
            <form onSubmit={(e) => createColor(e)}>
                {/* <input type="color" name="color" onChange={(e) => setColor(e.target.value)}/> */}
                <input type="color" name="color" onChange={(e) => getAll(e)}/>
                <input type="number" name="size" onChange={(e) => getAll(e)}/>
                
                <button>go</button>
            </form>
        </fieldset>
    )
}

export default Form