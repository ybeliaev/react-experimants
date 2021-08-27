import React, { useState } from 'react'
import PropTypes from 'prop-types';
import { clamp } from '../../static/constants'

import InputField from '../InputField'



const Counter = ({min, max}) => {
    const [count, setCount] = useState(0)

    const currentCount = (val) => {
        setCount(clamp(val, min, max))
        console.log(val)
    }
    const inc = () => currentCount(count + 1)
    const dec = () => currentCount(count - 1)


    return (
        <div>
            <button onClick={inc}>+</button>
            <InputField value={count} />
            <button onClick={dec}>-</button>
        </div>
    )

}

Counter.propTypes = {
    min: PropTypes.number,
    max: PropTypes.number,
};


export default Counter