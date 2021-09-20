import React, { useState } from 'react'
import './App.css'
import PropTypes from 'prop-types'

import { productFromServer } from './static/constants'
import Cards from './components/Cards'
import Modal from './components/Modal'

function App() {
    const [products, setProduct] = useState(productFromServer)
    let total = products.reduce(
        (acc, el) => acc + el.price * el.selectedProduct,
        0
    )
    const changeCountProduct = (id, count) => {
        setProduct(
            products.map((product) =>
                product.id !== id
                    ? product
                    : { ...product, selectedProduct: count }
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
                <span>Total </span>
                <strong>{total}</strong>
            </div>
            <Modal />
        </div>
    )
}
App.propTypes = {
    onChangeCount: PropTypes.func,
}
export default App
