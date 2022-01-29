import React from 'react'
import PropTypes from 'prop-types'

export const Card = ({ name, dispatch }) => {
    const handleDelete = () => {
        dispatch({
            type: 'DELETE_NAME',
            payload: name,
        })
        console.log('delete name: ', name)
    }
    const handleEdit = () => {
        dispatch({
            type: 'EDIT_NAME',
            payload: name,
        })
    }
    return (
        <div className="card_wrapper card">
            <img src={'https://via.placeholder.com/150'} alt="avatar" />
            <div className="container">
                <h4>
                    <b>{name}</b>
                </h4>
            </div>
            <div>
                <button className="btn" onClick={handleEdit}>
                    edit
                </button>
                <button className="btn btn-alert" onClick={handleDelete}>
                    del
                </button>
            </div>
        </div>
    )
}
Card.propTypes = {
    name: PropTypes.string,
    dispatch: PropTypes.func,
}
