import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams, useNavigate } from 'react-router-dom'

const ViewOne = (props) => {

    const navigate = useNavigate();
    // grab the var from the url :id :var :whatever
    const { id } = useParams();

    const [car, setCar] = useState({})

    useEffect(() => {
        // axios.get("http://localhost:8000/api/cars/"+id)
        axios.get(`http://localhost:8000/api/cars/${id}`)
            .then(res => {
                console.log(res.data);
                setCar(res.data)
            })
            .catch(err => console.log(err))
    }, [])

    const deleteCar = (id) => {
        console.log(id);
        axios.delete(`http://localhost:8000/api/cars/${id}`)
            .then(res => {
                console.log(res.data);
                navigate("/cars")
            })
            .catch( err => console.log(err))
    }

    return (
        <div>
            <h1>Show One</h1>
            {
                car ? (
                    <div style={{ backgroundColor: car.color }}>
                        make: {car.make} <br />
                            <img src={car.image} alt={car.make} height="200" /> <br />
                        <p style={{ backgroundColor: "white" }}>
                            favorite: {car.favorite ? "♥" : "--"}
                        </p>
                        <button onClick={() => deleteCar(car._id)}>DELETE</button>
                    </div>
                ) : <p>loading</p>
            }
        </div>
    )
}

export default ViewOne