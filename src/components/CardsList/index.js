import React from 'react'
import PropTypes from 'prop-types';
import { Card } from "../Card"

export const CardsList = ({state}) => {
    console.log(state)
    return (
    <div className='cardList_container'>
    <Card />
    <Card />
    <Card />
    </div>    
    
    )
}
CardsList.propTypes ={
    state: PropTypes.object
}