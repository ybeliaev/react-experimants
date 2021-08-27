import React from 'react'
import Cards from './components/Cards'
import { productFromServer } from './static/constants'



function App() {

    return (
        <div>
            <Cards data={productFromServer}/>
        </div>
    )
}

export default App
