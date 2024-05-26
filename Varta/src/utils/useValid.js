import React, { useState } from "react";

const useValid = (val, validator) => {
    const [data, setData] = useState(val)
    const [error, setError] = useState(false)
    const [helperText, setHelperText] = useState('')

    const change = (e) =>{
        const value = e.target.value
        setData(value)
        const {isValid, message} = validator(value)
        if(!isValid){
            setError(true);
            setHelperText(message)
        }else{
            setError(false)
            setHelperText('')
        }
    
    }
    return {
        data,
        error,
        helperText,
        change
    };
}

export default useValid