import React, { useState } from 'react'
// import { nanoid } from 'nanoid'

import PropTypes from 'prop-types'

export const Input = ({ dispatch, inputName }) => {
    // const [inputValue, setName] = useState('')

    const handleAddName = () => {
        if (inputName !== '') {
            dispatch({
                type: 'ADD_NAME',
                payload: inputName,
            })
            dispatch({
                type: 'RESET_INPUT_VALUE',
                payload: '',
            })
            // setName('')
        }
    }
    const handleInputChange = (e) => {
        dispatch({
            type: 'CHANGE_INPUT_VALUE',
            payload: e.target.value,
        })

        // setName(e.target.value)
    }
    return (
        <div>
            <input type="text" value={inputName} onChange={handleInputChange} />
            <button type="button" className="btn" onClick={handleAddName}>
                +
            </button>
        </div>
    )
}

Input.propTypes = {
    dispatch: PropTypes.func,
    inputName: PropTypes.string,
}
