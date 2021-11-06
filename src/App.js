import React, { useContext, useState } from 'react'
import './App.css'
import PropTypes from 'prop-types'

import Cards from './components/Cards'
import Modal from './components/Modal'

import storeContext from './contexts/store'
import { observer } from 'mobx-react-lite'

function App() {
    let { cart } = useContext(storeContext)
    console.log({ cart })
    let { products, remove, onChangeCount, total } = cart

    return (
        <div className="wrapper">
            <Cards
                data={products}
                onChangeCount={onChangeCount}
                remove={remove}
            />
            <div>
                <span>Total: </span>
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
