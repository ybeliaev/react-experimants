import { makeObservable, action, observable, computed } from 'mobx'

import { productFromServer } from '../static/constants'

class CartStore {
    constructor() {
        makeObservable(this, {
            products: observable,
            total: computed,
            changeCountProduct: action.bound,
            remove: action.bound,
        })
    }
    products = productFromServer
    // расчитать общую сумму выбранных товаров
    get total() {
        return this.products.reduce(
            (acc, product) => acc + product.selectedProduct * product.price,
            0
        )
    }
    // изменение числа заказанного
    changeCountProduct = (id, count) => {
        let product = this._getById(id)
        if (product !== undefined) {
            product.changeCountProduct = count
        }
    }
    // удаление товара
    remove = (id) => {
        this.products.filter((product) => product.id !== id)
    }
    _getById = (id) => this.products.find((prod) => prod.id === id)
}

export default new CartStore()
