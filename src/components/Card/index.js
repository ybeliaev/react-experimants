import React from 'react'


export const Card = () => {
    const handleDelete = () => {
        console.log("del")
    }
    return (
        <div className="card">
            <img src={'https://via.placeholder.com/100'} alt="avatar" />
            <div className="container">
                <h4>
                    <b>{'text'}</b>
                </h4>
            </div>
            <button className="btn">edit</button>
            <button className="btn btn-alert" onClick={handleDelete}>del</button>
        </div>
    )
}