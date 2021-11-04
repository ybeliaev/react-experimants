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
    changeCountProduct = (id, count) => {
        this.products.map((product) =>
            product.id !== id ? product : { ...product, selectedProduct: count }
        )
    }
    remove = (id) => {
        this.products.filter((product) => product.id !== id)
    }
    constructor() {
        makeObservable(this, {
            products: observable,
            total: computed,
            changeCountProduct: action.bound,
            remove: action.bound,
        })
    }
}

export default new CartStore()
