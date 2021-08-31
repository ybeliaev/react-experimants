import React from 'react'

import Counter from '../Counter'
import PropTypes from 'prop-types'

function Card({dataGood,}) {
    return (
        <>
            <td>{dataGood.title}</td>
            <td>{dataGood.price}</td>
            <td><Counter min={0} max={dataGood.rest}  /></td>
            <td>{dataGood.price * dataGood.currentNumber}</td>
        </>
    )
}
Card.propTypes = {
    dataGood: PropTypes.object,

}
export default Card