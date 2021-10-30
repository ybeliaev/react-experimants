import React from 'react'
import { makeObservable, observable, computed, action } from 'mobx'
import { observer } from 'mobx-react-lite'

class OrderStore {
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
    constructor() {
        makeObservable(this, {
            formData: observable,
            isValid: computed,
            change: action,
        })
    }
}

export default new OrderStore()
