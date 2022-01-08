import React from 'react'
import { nanoid } from 'nanoid'

import PropTypes from 'prop-types';
import { Card } from "../Card"


export const CardsList = ({state, dispatch}) => {
    const {nameList} = state
    console.log(state)
    return (
    <div className='cardList_container'>
        {nameList.map((name) => {
            return <Card name={name} key={nanoid(6)} dispatch={dispatch}/>
        })}
    
    </div>    
    
    )
}
CardsList.propTypes ={
    state: PropTypes.object,
    dispatch: PropTypes.func
}