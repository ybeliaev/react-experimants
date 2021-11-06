import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import reportWebVitals from './reportWebVitals'
import CartStore from './store/cart'
import storeContext from './contexts/store'
import orderStore from './store/order'
import cartStore from './store/cart'
let stores = {
    order: orderStore,
    cart: cartStore,
}

ReactDOM.render(
    <storeContext.Provider value={stores}>
        <App />
    </storeContext.Provider>,
    document.getElementById('root')
)
console.log(CartStore.total)

reportWebVitals()
