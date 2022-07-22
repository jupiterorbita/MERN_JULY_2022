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

    // if we want a delete here ¯\_(ツ)_/¯
    const deleteCar = (id) => {
        console.log(id);
        axios.delete(`http://localhost:8000/api/cars/${id}`)
            .then(res => {
                console.log(res.data);
                const filteredCars = cars.filter((car) => car._id != id);
                setCars(filteredCars);
            })
            .catch( err => console.log(err))
    }

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
                            <Link to={`/update/${car._id}`}>UPDATE</Link> <br />
                            {/* optional delete here ¯\_(ツ)_/¯ */}
                            <button onClick={() => deleteCar(car._id)}>DELETE ME</button>
                        </div>
                    )
                })
            }
            {/* {JSON.stringify(cars)} */}
        </div>
    )
}

export default Main