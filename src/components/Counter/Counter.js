import React, { useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from 'react-icons/md'
import { clamp } from '../../static/constants'

const Counter = ({ min, max, countFromButton, onChangeCount }) => {
    let inputRef = useRef()
    let updInput = (num) => (inputRef.current.value = num)
    useEffect(() => {
        updInput(countFromButton)
    }, [countFromButton])

    const applyCurrentCount = (val) => {
        let newCurrent = clamp(val, min, max)
        updInput = (num) => (inputRef.current.value = num)
        if (newCurrent !== countFromButton) {
            onChangeCount(newCurrent)
        }
    }
    const inc = () => applyCurrentCount(countFromButton + 1)
    const dec = () => applyCurrentCount(countFromButton - 1)

    const inputStrBlur = (e) => {
        let val = parseInt(e.target.value)
        applyCurrentCount(isNaN(val) ? min : val)
    }
    return (
        <div>
            <MdKeyboardArrowUp onClick={inc} disabled={max <= countFromButton}>
                +
            </MdKeyboardArrowUp>
            <input
                defaultValue={countFromButton}
                type="number"
                ref={inputRef}
                onBlur={inputStrBlur}
            />
            <MdKeyboardArrowDown
                onClick={dec}
                disabled={min >= countFromButton}
            >
                -
            </MdKeyboardArrowDown>
        </div>
    )
}

Counter.propTypes = {
    min: PropTypes.number,
    max: PropTypes.number,
    countFromButton: PropTypes.number,
    onChangeCount: PropTypes.func,
}

export default Counter
