import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import Counter from '../Counter'

function Cards() {
    return (
        <table>
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Price</th>
                    <th>Count</th>
                    <th>Total</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                {products.map((elem) => (
                    <tr key={elem.id}>
                        <td>{elem.title}</td>
                        <td>{elem.price}</td>
                        <td>
                            <Counter
                                min={0}
                                max={elem.rest}
                                countFromButton={elem.selectedProduct}
                                onChangeCount={(val) =>
                                    onChangeCount(elem.id, val)
                                }
                            />
                        </td>
                        <td>{elem.price * elem.selectedProduct}</td>
                        <td>
                            <button
                                className="btn btn-alert"
                                type="button"
                                onClick={() => remove(elem.id)}
                            >
                                x
                            </button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}
Cards.propTypes = {
    data: PropTypes.array,
    onChangeCount: PropTypes.func,
    remove: PropTypes.func,
}

export default Cards
