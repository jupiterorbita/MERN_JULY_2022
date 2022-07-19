import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';

const Main = (props) => {

    const [cars, setCars] = useState([])

    useEffect(() => {
        axios.get("http://localhost:8000/api/cars")
            .then(res => {
                console.log(res.data);
                setCars(res.data);
            })
            .catch(err => console.log(err))
    }, [])

    return (
        <div>
            <h1>All cars</h1>
            <hr />
            {
                cars.map((car, i) => {
                    return (
                        <div key={car._id} style={{ backgroundColor: car.color }}>
                            make: {car.make} <br />
                            <Link to={`/cars/${car._id}`}>
                                <img src={car.image} alt={car.make} height="200" /> <br />
                            </Link>
                            <p style={{ backgroundColor: "white" }}>
                                favorite: {car.favorite ? "♥" : "--"}
                            </p>
                            <Link to={`/update/${car._id}`}>UPDATE</Link>
                        </div>
                    )
                })
            }
            {/* {JSON.stringify(cars)} */}
        </div>
    )
}

export default Main