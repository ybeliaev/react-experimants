import React, { useState } from 'react'
import PropTypes from 'prop-types';
import { clamp } from '../../static/constants'

import InputField from '../InputField'



const Counter = ({min, max, id}) => {
    const [count, setCount] = useState(0)

    const currentCount = (val) => {
        setCount(clamp(val, min, max))
        console.log("currentCount:",val)
    }
    const inc = () => currentCount(count + 1)
    const dec = () => currentCount(count - 1)

    const handlerChangeInput = (e) => {
        setCount(e.target.value)
        console.log("handlerChangeInput", id)
        console.log("e", e.target.value)

    }

    return (
        <div>
            <button onClick={inc}>+</button>
            <InputField value={count} handlerChangeInput={handlerChangeInput}/>
            <button onClick={dec}>-</button>
        </div>
    )

}

Counter.propTypes = {
    min: PropTypes.number,
    max: PropTypes.number,
    id: PropTypes.number
};


export default Counter