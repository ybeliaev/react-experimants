import React, { useState } from 'react'
import PropTypes from 'prop-types'

import { productFromServer } from './static/constants'
import Cards from './components/Cards'

function App() {
    const [products, setProduct] = useState(productFromServer)

    return (
        <div>
            <Cards data={products} />
        </div>
    )
}
App.propTypes = {
    onChangeCount: PropTypes.func,
}
export default App
