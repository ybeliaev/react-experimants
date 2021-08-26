import React, { useState } from 'react'
import PropTypes from 'prop-types';
import { clamp } from '../../static/constants'



const Interface = ({min, max}) => {
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
            <span>{count}</span>
            <button onClick={dec}>-</button>
        </div>
    )

}

Interface.propTypes = {
    min: PropTypes.number,
    max: PropTypes.number,
};


export default Interface