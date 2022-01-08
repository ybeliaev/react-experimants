import React, { useReducer } from 'react'
import './App.css'
import { CardsList } from './components/CardsList'
import { Input } from './components/Input'

const initialState = {
    nameList: []
}

const reducer = (state, action) => {
    switch (action.type) {
        case "ADD_NAME":
            return {
                ...state,
                nameList: [...state.nameList, action.payload],
            }            
    
        default:
            return initialState
    }
}

function App() {
    const [state, dispatch] = useReducer(reducer, initialState);   

    return (
        <div>
            <Input dispatch={dispatch}/>
            <CardsList state={state}/>
        </div>
    )
}
export default App
