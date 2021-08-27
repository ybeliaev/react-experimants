import React from 'react'
import Counter from '../Counter'
import { productFromServer } from '../../static/constants'

function Cards(props) {
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
                <tr>
                    <td>{productFromServer[0].title}</td>
                    <td>{productFromServer[0].price}</td>
                    <td><Counter/></td>
                    <td>{productFromServer[0].cnt * productFromServer[0].price}</td>
                </tr>
            </tbody>
        </table>
    )
}

export default Cards