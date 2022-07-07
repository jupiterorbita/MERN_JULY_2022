import React, {useState } from 'react'
import Display from './Display';

const Form = (props) => {

    // CREATE STATE for this COMPONENT
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");  

    const [newUserObj, setNewUserObj] = useState({})
    
    const createUser = (e) => {
        e.preventDefault();
        console.log("submitted");

        const newUser = { 
            username,
            email, 
            password 
        };
        console.log("Welcome", newUser);
        setUsername("");
        setEmail("");
        setPassword("");
        setNewUserObj(newUser);
    };

    const userNameHandler = (value) => {
        console.log(value);
        if(value.length < 4) {
            // state Err +
        } else {

        }
        // check.....
        setUsername(value);
    }

    return (
        <fieldset>
            <legend>Form.jsx</legend>
        <h1>form</h1>
        username: {JSON.stringify(username)} <br />
        email : {JSON.stringify(email)} <br />
        password : {JSON.stringify(password)} <br />
        <hr />
        <p>
            user = {JSON.stringify(user)}
        </p>
        <form onSubmit={ createUser } >
            <div>
                Username:<input onChange={ (e) => userNameHandler(e.target.value) } value={username} />
            </div>
            <div>
                Email Address: <input onChange={ (e) => setEmail(e.target.value) } value={email}  />
            </div>
            <div>
                Password: <input onChange={ (e) => setPassword(e.target.value) } value={password} />
            </div>
            <button>submit</button>
        </form>
        <hr />
        <Display newUserObj={newUserObj}/>
        </fieldset>
    )
}

export default Form