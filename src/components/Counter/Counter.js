import React from 'react'
import PropTypes from 'prop-types'
import { clamp } from '../../static/constants'

const Counter = ({ min, max, countFromButton, onChangeCount }) => {
    const applyCurrentCount = (val) => {
        let newCurrent = clamp(val, min, max)
        onChangeCount(newCurrent)
    }
    const inc = () => applyCurrentCount(countFromButton + 1)
    const dec = () => applyCurrentCount(countFromButton - 1)
    const inputStr = (e) => {
        let val = parseInt(e.target.value)
        onChangeCount(isNaN(val) ? min : val)
    }
    return (
        <div>
            <button onClick={inc}>+</button>
            <input value={countFromButton} type="number" onChange={inputStr} />
            <button onClick={dec}>-</button>
        </div>
    )
}

Counter.propTypes = {
    min: PropTypes.number,
    max: PropTypes.number,
    id: PropTypes.number,
    countFromButton: PropTypes.number,
    handlerInputOnChange: PropTypes.func,
    onChangeCount: PropTypes.func,
}

export default Counter
