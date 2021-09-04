import React, { useState } from 'react'
import PropTypes from 'prop-types'

import { productFromServer } from './static/constants'
import Cards from './components/Cards'

function App() {
    const [products, setProduct] = useState(productFromServer)
    let total = products.reduce(
        (acc, el) => acc + el.price * el.currentNumber,
        0
    )
    const changeCountProduct = (id, count) => {
        setProduct(
            products.map((product) =>
                product.id !== id
                    ? product
                    : { ...product, currentNumber: count }
            )
        )
    }
    const remove = (id) => {
        setProduct(products.filter((product) => product.id !== id))
    }
    return (
        <div>
            <Cards
                data={products}
                onChangeCount={changeCountProduct}
                remove={remove}
            />
            <div>
                <strong>Total {total}$</strong>
            </div>
        </div>
    )
}
App.propTypes = {
    onChangeCount: PropTypes.func,
}
export default App
