import React from 'react'
import PropTypes from 'prop-types'
import { clamp } from '../../static/constants'

const Counter = ({
    min,
    max,
    countFromButton,
    handlerInputOnChange,
    onChangeFromBtn,
}) => {
    const applyCurrent = (val) => {
        let newCurrent = clamp(val, min, max)
        onChangeFromBtn(newCurrent)
    }
    const inc = () => applyCurrent(countFromButton + 1)
    const dec = () => applyCurrent(countFromButton - 1)

    return (
        <div>
            <button onClick={inc}>+</button>
            <input
                value={countFromButton}
                type="number"
                onChange={handlerInputOnChange}
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
    onChangeFromBtn: PropTypes.func,
}

export default Counter
