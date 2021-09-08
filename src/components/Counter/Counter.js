import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { clamp } from '../../static/constants'

const Counter = ({ min, max, countFromButton, onChangeCount }) => {
    const [valueInput, setValueInput] = useState(countFromButton)
    useEffect(() => {
        setValueInput(countFromButton)
    }, [countFromButton])
    const applyCurrentCount = (val) => {
        let newCurrent = clamp(val, min, max)
        if (newCurrent !== countFromButton) {
            onChangeCount(newCurrent)
        }
        setValueInput(newCurrent)
    }
    const inc = () => applyCurrentCount(countFromButton + 1)
    const dec = () => applyCurrentCount(countFromButton - 1)
    const inputStr = (e) => {
        setValueInput(e.target.value)
    }
    const inputStrBlur = () => {
        let val = parseInt(valueInput)
        applyCurrentCount(isNaN(val) ? min : val)
    }
    return (
        <div>
            <button onClick={inc}>+</button>
            <input
                value={valueInput}
                type="number"
                onChange={inputStr}
                onBlur={inputStrBlur}
            />
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
