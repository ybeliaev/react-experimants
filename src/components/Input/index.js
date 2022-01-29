import React, { useRef, useState } from 'react'
// import { nanoid } from 'nanoid'

import PropTypes from 'prop-types'

export const Input = ({ dispatch, inputName, editingName }) => {
    // const [inputValue, setName] = useState('')
    const inputRef = useRef(null)

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
            inputRef.current.focus()
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
    const handleInputDone = () => {
        if (inputName.length) {
            dispatch({
                type: 'EDIT_NAME_DONE',
                payload: inputName,
            })
            dispatch({
                type: 'RESET_INPUT_VALUE',
            })
            inputRef.current.focus()
        }
    }
    return (
        <div>
            <input
                type="text"
                value={inputName}
                onChange={handleInputChange}
                ref={inputRef}
            />
            <button type="button" className="btn" onClick={handleAddName}>
                +
            </button>
        </div>
    )
}

Input.propTypes = {
    dispatch: PropTypes.func,
    inputName: PropTypes.string,
    editingName: PropTypes.string,
}
