import {useState} from 'react'

const Form = (props) => {
    console.log(props);
    console.log(props.animals);

    const [input, setInput] = useState("")

    const formHandler = (e) => {
       e.preventDefault();
    //    props.addAnimal(input);
        props.setAnimals([...props.animals, input])
    }

    return (
        <fieldset>
            <legend>Form.jsx</legend>
            <p>
                {JSON.stringify(input)}
            </p>

            <form onSubmit={formHandler}>
                <input onChange={(e) => setInput(e.target.value)} value={input}/>
                <button >submit</button>
            </form>
        </fieldset>
    )
}

export default Form