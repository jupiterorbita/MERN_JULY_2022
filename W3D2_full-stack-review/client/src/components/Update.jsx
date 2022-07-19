import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams, useNavigate } from 'react-router-dom'


const Update = (props) => {

    const navigate = useNavigate() 

    // grab the var from the url :id :var :whatever
    const { id } = useParams();

    // const [car, setCar] = useState({})

    const [make, setMake] = useState("");
    const [image, setImage] = useState("");
    const [color, setColor] = useState("blue");
    const [favorite, setFavorite] = useState(false);


    useEffect(() => {
        // axios.get("http://localhost:8000/api/cars/"+id)
        axios.get(`http://localhost:8000/api/cars/${id}`)
            .then(res => {
                console.log(res.data);
                setMake(res.data.make)
                setImage(res.data.image)
                setColor(res.data.color)
                setFavorite(res.data.favorite)
                // setCar(res.data)
            })
            .catch(err => console.log(err))
    }, [id])

    const updateCarForm = (e) => {
        e.preventDefault()

        const objtoupdate = {
            make,
            image,
            color,
            favorite
        }

        console.log(id);
        console.log(objtoupdate);

        axios.put("http://localhost:8000/api/cars/" + id, objtoupdate )
            .then(res=> {
                console.log(res.data);
                navigate("/cars")
            })
            .catch(err => console.log(err))
    }

    return (
        <div>
            <p>
                {/* {car.color} */}
            </p>
            <form onSubmit={updateCarForm}>
                make: <input onChange={e => setMake(e.target.value)} value={make}/> <br />
                image: <input onChange={e => setImage(e.target.value)} value={image}/> <br />
                color: <input type="color" onChange={e => setColor(e.target.value)} value={color} /> <br />
                favorite <input type="checkbox" onChange={e => setFavorite(e.target.checked)} checked={favorite} /> <br />
                <button>submit</button>
            </form>

        </div>
    )
}

export default Update