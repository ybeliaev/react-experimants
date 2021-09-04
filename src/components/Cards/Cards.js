import React from 'react'
import PropTypes from 'prop-types'
import Counter from '../Counter'

function Cards({ data, onChangeCount }) {
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
                {data.map((elem) => (
                    <tr key={elem.id}>
                        <td>{elem.title}</td>
                        <td>{elem.price}</td>
                        <td>
                            <Counter
                                min={0}
                                max={elem.rest}
                                countFromButton={elem.currentNumber}
                                onChangeCount={(val) =>
                                    onChangeCount(elem.id, val)
                                }
                            />
                        </td>
                        <td>{elem.price * elem.currentNumber}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}
Cards.propTypes = {
    data: PropTypes.array,
    onChangeCount: PropTypes.func,
}

export default Cards
