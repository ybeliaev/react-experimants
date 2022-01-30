import React, { useReducer } from 'react'

import './App.css'

import { CardsList } from './components/CardsList'
import { Input } from './components/Input'

export const GlobalContext = React.createContext()

const initialState = {
    editingName: '',
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
            return {
                ...state,
                inputName: action.payload,
                editingName: action.payload,
            }
        case 'EDIT_NAME_DONE':
            const { editingName } = state
            const oldArray = state.nameList
            const filteredArray = oldArray.filter((el) => el !== editingName)
            const newArray = [...filteredArray, action.payload]
            return {
                ...state,
                nameList: newArray,
                inputName: initialState.inputName,
                editingName: initialState.editingName,
            }
        case 'CHANGE_INPUT_VALUE':
            return { ...state, inputName: action.payload }
        case 'RESET_INPUT_VALUE':
            return {
                ...state,
                inputName: initialState.inputName,
            }

        default:
            return initialState
    }
}

function App() {
    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <GlobalContext value={{ state, dispatch }}>
            <div>
                <Input
                    dispatch={dispatch}
                    inputName={state.inputName}
                    editingName={state.editingName}
                />
                <CardsList state={state} dispatch={dispatch} />
            </div>
        </GlobalContext>
    )
}
export default App
