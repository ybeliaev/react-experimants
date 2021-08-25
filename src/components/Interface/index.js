import React, { useState } from 'react'

const Interface = ({min, max}) => {
    const [count, setCount] = useState(0)
    const clamp = (number, min, max) => {
        return number > max ? max : number < min ? min : number
    }
    const currentCount = (val) => {
        setCount(clamp(val,min, max))
        console.log(val)
    }
    const inc = () => currentCount(count + 1)

    const dec = () => currentCount(count - 1)
    return (
        <div>
            <button onClick={inc}>+</button>
            <span>{count}</span>
            <button onClick={dec}>-</button>
        </div>
    )
}

export default Interface