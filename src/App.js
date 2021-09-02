import React, { useState } from 'react'
import PropTypes from 'prop-types'

import { productFromServer } from './static/constants'
import Cards from './components/Cards'

function App() {
    const [products, setProduct] = useState(productFromServer)
    const changeCountProduct = (id, count) => {
        setProduct(
            products.map((product) =>
                product.id !== id
                    ? product
                    : { ...product, currentNumber: count }
            )
        )
        console.log(count)
    }
    return (
        <div>
            <Cards data={products} onChangeCount={changeCountProduct} />
        </div>
    )
}
App.propTypes = {
    onChangeCount: PropTypes.func,
}
export default App
