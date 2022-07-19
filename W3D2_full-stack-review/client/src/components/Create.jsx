import React, {useState} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Create = (props) => {

    const navigate = useNavigate() 

    const [make, setMake] = useState("");
    const [image, setImage] = useState("");
    const [color, setColor] = useState("blue");
    const [favorite, setFavorite] = useState(false);

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
                navigate("/cars")
            })
            .catch(err => {
                console.log(err);
            })
    }

    return (
        <div>
            <h1>Form</h1>
            <form onSubmit={createCarForm}>
                make: <input onChange={e => setMake(e.target.value)} /> <br />
                image: <input onChange={e => setImage(e.target.value)}/> <br />
                color: <input type="color" onChange={e => setColor(e.target.value)}/> <br />
                favorite <input type="checkbox" onChange={e=> setFavorite(e.target.checked)} /> <br />
                <button>submit</button>
            </form>
        </div>
    )
}

export default Create