import React, { useContext } from 'react'

import PropTypes from 'prop-types'
import { GlobalContext } from '../../App'

import { Card } from '../Card'

export const CardsList = () => {
    // const { nameList } = state
    const {
        state: { nameList },
    } = useContext(GlobalContext)
    console.log(nameList)
    return (
        <div className="cardList_container">
            {nameList.map((name, i) => {
                return (
                    <Card
                        name={name}
                        key={i}
                        // dispatch={dispatch}
                    />
                )
            })}
        </div>
    )
}
CardsList.propTypes = {
    state: PropTypes.object,
    dispatch: PropTypes.func,
}
