import React, { useState } from 'react'
import PropTypes from 'prop-types'


export const AddCategory = ({setCategory}) => {

    const [ inputValue, setInputValue ] = useState("")

    const handleInputChange = ( e ) => {
        setInputValue( e.target.value )
    }

    const HandleSubmit = ( e ) => {
        e.preventDefault();
       if (inputValue.trim().length>2) {
       setCategory([ inputValue ]);
       setInputValue("");
       }
    }

    return (
        <form onSubmit={ HandleSubmit }>
            <input
             type="text"
             value={ inputValue }
             onChange={ handleInputChange }
             required
            />
        </form>
    )
}

AddCategory.propTypes = {
    setCategory: PropTypes.func.isRequired
}
