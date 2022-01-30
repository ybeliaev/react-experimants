import React, { useContext, useRef } from 'react'

import PropTypes from 'prop-types'
import { GlobalContext } from '../../App'

export const Input = () => {
    // const [inputValue, setName] = useState('')
    const inputRef = useRef(null)
    const {
        dispatch,
        state: { inputName, editingName },
    } = useContext(GlobalContext)

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
            {editingName ? (
                <button type="button" className="btn" onClick={handleInputDone}>
                    DONE
                </button>
            ) : (
                <button type="button" className="btn" onClick={handleAddName}>
                    +
                </button>
            )}
        </div>
    )
}

Input.propTypes = {
    dispatch: PropTypes.func,
    inputName: PropTypes.string,
    editingName: PropTypes.string,
}
