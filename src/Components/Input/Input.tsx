// components/Layout.js
import Header from '../Header/Header';
import {InputTag} from '../../styles//Input.style';
import React, { useState, useEffect } from "react";

import {styled, TextField} from "@mui/material";
import { InputProps } from '@/@types/Input';

export const InputField = ({  
    primary,
    type,
    placeholder,
    value = "",
    getValue  ,
    error ,
    errorMessage,
    isRequired = false,
    ...rest
    }: InputProps
  )=>{
  
 const [initialValue, setInitialValue] = useState("");

  const handleChange = (e:React.ChangeEvent<HTMLInputElement>):void => {
    setInitialValue(e.target.value);
    getValue(e.target.value);
  };

  const InputField= styled(TextField)((theme)=>({
 
  })) 
  
   return (
    <>
    {primary ? (
          <InputField
              error={error(initialValue)}
              helperText={error(initialValue) && errorMessage}
              value={initialValue}
              onChange={handleChange}
              placeholder={placeholder}
              type={type}
               {...rest}
            /> 
       ) : (
           <InputField
            error={error(initialValue)}
            helperText={error(initialValue) && errorMessage}
            value={initialValue}
            onChange={handleChange}
            placeholder={placeholder}
            type={type}
            variant="outlined"
             {...rest}
          />
      ) 
     }
    </>
   ) 
}