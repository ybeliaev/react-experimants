import React, { useState } from 'react'
import Cards from './components/Cards'
import { productFromServer } from './static/constants'



function App() {
    const [products, setProduct] = useState(productFromServer)
    return (
        <div>
            <Cards data={products}/>
        </div>
    )
}

export default App
