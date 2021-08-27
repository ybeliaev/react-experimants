import React from 'react'

import Counter from '../Counter'
import PropTypes from 'prop-types'
import Cards from '../Cards'

function Card({dataGood}) {
    return (
        <>
            <td>{dataGood.title}</td>
            <td>{dataGood.price}</td>
            <td><Counter/></td>
            <td>{dataGood.price * dataGood.cnt}</td>
        </>
    )
}
Card.propTypes = {
    dataGood: PropTypes.object
}
export default Card