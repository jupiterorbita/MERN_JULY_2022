import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Hero = (props) => {

    // instantiate useNavigate
    const navigate = useNavigate()

    const { urlVar } = useParams()

    const [hero, setHero] = useState(null)

    useEffect(() => {
        axios.get(`https://akabab.github.io/superhero-api/api/id/${urlVar}.json`)
            .then(res => {
                console.log(res.data);
                setHero(res.data);
            })
            .catch(err => {
                console.log("❌❌❌❌❌❌❌");
                console.log(err)
                navigate("/error")
            })
    }, [urlVar])

    return (
        <div>
            {
                hero ? (
                    <div>
                        <h3> Hero</h3>

                        url: {urlVar}
                        <hr />
                        {/* {JSON.stringify(hero)} */}
                        <h3>{hero.name}</h3>
                        <img src={hero.images.md} height="200" alt="" />
                    </div>
                ) : <p>"loading"</p>
            }
        </div>
    )
}

export default Hero