import React from 'react'
import Card from '../Card'
import PropTypes from 'prop-types';

function Cards({data}) {

    return (
        <table>
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Price</th>
                    <th>Count</th>
                    <th>Total</th>
                </tr>
            </thead>
            <tbody>
            {data.map((elem, idx) => (
                <tr key={elem.id}>
                    <Card dataGood={elem} />
                </tr>
            ))}
            </tbody>
        </table>
    )
}
Cards.propTypes = {
    data: PropTypes.array
}

export default Cards