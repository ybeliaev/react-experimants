import React from 'react'
import PropTypes from 'prop-types'

function InputField({value,handlerChangeInput}) {
    const handlerBlurChangeInput = e => {
        console.log("onBlur: ",e.target.value)
    }
    const handlerKeyPress = e => {
        if(e.key === 'Enter'){
            console.log("Enter here")
        }
    }


    return (
        <div>
            <input type="number" value={value} onBlur={handlerBlurChangeInput} onChange={e=>handlerChangeInput(e)} onKeyPress={handlerKeyPress}/>
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
     handlerChangeInput: PropTypes.func
 };

export default InputField