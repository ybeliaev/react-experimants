import React, { useContext, useState } from 'react'
import './App.css'
import { CardsList } from './components/CardsList'
import { Input } from './components/Input'


function App() {
    

    return (
        <div>
            <Input />
            <CardsList />
        </div>
    )
}
export default App
