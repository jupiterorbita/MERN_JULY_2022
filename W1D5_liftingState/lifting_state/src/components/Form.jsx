import {useState} from 'react'

const Form = (props) => {
    console.log(props);
    console.log(props.animals);

    const [input, setInput] = useState("");
    const [age, setAge] = useState(0)

    const formHandler = (e) => {
       e.preventDefault();
    //    props.addAnimal(input);
        // props.setAnimals([...props.animals, input])
        
        const someNewPerson = {
            name: input,
            age
        }
        props.addPerson(someNewPerson)
    }

    return (
        <fieldset>
            <legend>Form.jsx</legend>
            <div>
                {JSON.stringify(input)} <br />
                {JSON.stringify(age)} <br />
            </div>

            <form onSubmit={formHandler}>
                <input onChange={(e) => setInput(e.target.value)} value={input}/>
                <input type="number" onChange={(e) => setAge(e.target.value)} value={age}/>
                <button >submit</button>
            </form>
        </fieldset>
    )
}

export default Form