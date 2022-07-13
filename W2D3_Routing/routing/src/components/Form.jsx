import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom'

const Form = (props) => {

    const navigate = useNavigate();
    const [num, setNum] = useState(1)

    const submitHeroId = (e) => {
        e.preventDefault();
        navigate("/hero/"+num)
    }

    return (
        <div>
            num: {num}
            <form onSubmit={submitHeroId}>
                <input type="number" onChange={e => setNum(e.target.value)} />
                <button>submit</button>
            </form>
        </div>
    )
}

export default Form