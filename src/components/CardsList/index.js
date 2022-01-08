import React from 'react'
import PropTypes from 'prop-types';
import { Card } from "../Card"


export const CardsList = ({state}) => {
    const {nameList} = state
    console.log(state)
    return (
    <div className='cardList_container'>
        {nameList.map((name, idx) => {
            return <Card name={name} key={idx} />
        })}
    
    </div>    
    
    )
}
CardsList.propTypes ={
    state: PropTypes.object
}