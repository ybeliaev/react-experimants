import React from 'react'
import PropTypes from 'prop-types'

function InputField({value}) {
    const handlerChangeInput = e => {
        console.log(e.target.value)
    }
    const handlerKeyPress = e => {
        if(e.key === 'Enter'){
            console.log("Enter here")
        }
    }

    return (
        <div>
            <input type="number" value={value} onBlur={handlerChangeInput} onKeyPress={handlerKeyPress}/>
        </div>
    )
}
 InputField.propTypes = {
     value: PropTypes.oneOfType(
         [
             PropTypes.string,
             PropTypes.number,
         ]
     ) ,
 };

export default InputField