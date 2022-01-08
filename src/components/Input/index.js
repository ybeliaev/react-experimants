import React, { useState } from 'react'
import PropTypes from 'prop-types';



export const Input = ({dispatch}) => {
    const [name, setName] = useState("")

    const handleAddName = () => {
        if (name !== "") {
            dispatch({
              type: "ADD_NAME",
              payload: name
            });
            setName("");
          }
    }
    const handleInput = (e) => {
        setName(e.target.value);
    }
    return (
        <div>
            <input type="text" value={name} onChange={handleInput}/>
            <button type="button" className='btn' onClick={handleAddName}>+</button>
        </div>
    )
}

Input.propTypes = {
    dispatch: PropTypes.func
}