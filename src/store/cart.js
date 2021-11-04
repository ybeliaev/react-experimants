import { makeObservable, action, observable, computed } from 'mobx'

import { productFromServer } from '../static/constants'

class CartStore {
    products = productFromServer
    // расчитать общую сумму вібранніх товаров
    get total() {
        return this.products.reduce(
            (acc, product) => acc + product.selectedProduct * product.price,
            0
        )
    }
    change = (id, selectProd) => {}
    constructor() {
        makeObservable(this, {
            products: observable,
            total: computed,
            change: action.bound,
            remove: action.bound,
        })
    }
}

export default new CartStore()
