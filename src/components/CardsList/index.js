import React from 'react'

import PropTypes from 'prop-types'
import { Card } from '../Card'

export const CardsList = ({ state, dispatch }) => {
    const { nameList } = state
    console.log(nameList)
    return (
        <div className="cardList_container">
            {nameList.map((name, i) => {
                return <Card name={name} key={i} dispatch={dispatch} />
            })}
        </div>
    )
}
CardsList.propTypes = {
    state: PropTypes.object,
    dispatch: PropTypes.func,
}
