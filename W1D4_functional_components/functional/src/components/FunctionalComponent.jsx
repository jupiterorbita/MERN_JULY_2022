import React, {useState} from 'react'

const FunctionalComponent = (props) => {
    // console.log(props.person);
    // CREATE STATE in Functional Component
    //    state
    //      |     change state
    //      V        V            default state
    const [num, setNum] = useState(10)
    const [person, setPerson] = useState(props.person)

    const clickButton = () => {
        // setNum(num + 1)
        setPerson({
            ...person,
            luckyNumber: person.luckyNumber + 1
        })
        // console.log(person.luckyNumber);
    }

    return (
        <fieldset>
            <legend>FunctionalComponent</legend>
            {/* <p>
                num: {num}
            </p> */}
               PERSON OBJ =  {JSON.stringify(person)}
            <hr />
            <p>
                person number = {person.luckyNumber}
            </p>
            <button onClick={() => clickButton()}>click me</button>
        </fieldset>
    )
}

export default FunctionalComponent