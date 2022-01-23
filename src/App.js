import React, { useReducer } from 'react'

import './App.css'

import { CardsList } from './components/CardsList'
import { Input } from './components/Input'

const initialState = {
    inputName: '',
    nameList: [],
}

const reducer = (state, action) => {
    switch (action.type) {
        case 'ADD_NAME':
            return {
                ...state,
                nameList: [...state.nameList, action.payload],
            }
        case 'DELETE_NAME':
            const newNameList = state.nameList.filter(
                (el) => el !== action.payload
            )
            return { ...state, nameList: newNameList }
        case 'EDIT_NAME':
            return { ...state, inputName: action.payload }
        case 'CHANGE_INPUT_VALUE':
            return { ...state, inputName: action.payload }
        case 'RESET_INPUT_VALUE':
            return { ...state, inputName: initialState.inputName }

        default:
            return initialState
    }
}

function App() {
    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <div>
            <Input dispatch={dispatch} inputName={state.inputName} />
            <CardsList state={state} dispatch={dispatch} />
        </div>
    )
}
export default App
