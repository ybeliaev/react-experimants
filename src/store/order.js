import { makeObservable, observable, computed, action } from 'mobx'
import { observer } from 'mobx-react-lite'

class OrderStore {
    constructor() {
        makeObservable(this, {
            formData: observable,
            isValid: computed,
            change: action,
        })
    }
    formData = {
        name: { label: 'Name', value: '' },
        email: { label: 'Email', value: '' },
        password: { label: 'Password', value: '' },
    }
    // check for completeness of all fields
    get iaValid() {
        return Object.values(this.formData).every((field) => field.value !== '')
    }
    change = (name, value) => {
        this.formData[name] = value.trim()
    }
}

export default new OrderStore()
