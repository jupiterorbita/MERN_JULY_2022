import React, {useState} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Create = (props) => {

    const navigate = useNavigate() 

    const [make, setMake] = useState("");
    const [image, setImage] = useState("");
    const [color, setColor] = useState("blue");
    const [favorite, setFavorite] = useState(false);
    // DB ERRORS
    const [errors, setErrors] = useState([]); 


    // form submit
    const createCarForm = (e) => {
        e.preventDefault();
        // console.log(make, image, color, favorite);
        const newObjToSendToDb = {
            make,
            image,
            color,
            favorite
        }
        axios.post("http://localhost:8000/api/cars", newObjToSendToDb)
            .then(res => {
                console.log(res.data);
                console.log("REACT SUCCESS");
                navigate("/cars")
            })
            .catch(err => {
                console.log("REACT ERROR");
                console.log(err.response.data);

                const errorResponse = err.response.data.errors; // Get the errors from err.response.data
                const errorArr = []; // Define a temp error array to push the messages in
                for (const key of Object.keys(errorResponse)) { // Loop through all errors and get the messages
                    errorArr.push(errorResponse[key].message)
                }
                // Set Errors
                setErrors(errorArr);
            })
    }

    return (
        <div>
            <p>
                {JSON.stringify(errors)}
            </p>
            <h1>Form</h1>
            <form onSubmit={createCarForm}>
                make: <input onChange={e => setMake(e.target.value)} /> <br />
                image: <input onChange={e => setImage(e.target.value)}/> <br />
                color: <input type="color" onChange={e => setColor(e.target.value)}/> <br />
                favorite <input type="checkbox" onChange={e=> setFavorite(e.target.checked)} /> <br />
                <button>submit</button>
            </form>
            {errors.map((err, index) => <p style={{color: "red"}}key={index}>{err}</p>)}
        </div>
    )
}

export default Create