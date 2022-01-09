import React from 'react'
import PropTypes from 'prop-types';


export const Card = ({name, dispatch}) => {
    const handleDelete = () => {
        dispatch({
            type: "DELETE_NAME",
            payload: name
        })
        console.log("delete name: ", name)
        console.log("del ", this)
    }
    return (
        <div className="card">
            <img src={'https://via.placeholder.com/100'} alt="avatar" />
            <div className="container">
                <h4>
                    <b>{name}</b>
                </h4>
            </div>
            <button className="btn">edit</button>
            <button className="btn btn-alert" onClick={handleDelete}>del</button>
        </div>
    )
}
Card.propTypes ={
    name: PropTypes.string,
    dispatch: PropTypes.func
}