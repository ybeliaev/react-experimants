import React from 'react'
import PropTypes, { number } from 'prop-types'
import { clamp } from '../../static/constants'




const Counter = ({min, max, count, id}) => {


    const currentCount = (val) => {
        return clamp(val, min, max)

    }
    const inc = () => currentCount(count + 1)
    const dec = () => currentCount(count - 1)



    return (
        <div>
            <button onClick={inc}>+</button>
            <input type='number' />
            <button onClick={dec}>-</button>
        </div>
    )

}

Counter.propTypes = {
    min: PropTypes.number,
    max: PropTypes.number,
    id: PropTypes.number,
    count: PropTypes.number
};


export default Counter