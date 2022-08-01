import React from 'react';

function Input({type, placeholder, name, onChange, title, value}){
    return(
      <>
        <label>
          {title}
        </label>
        <input 
          type = {type}
          placeholder = {placeholder}
          name = {name}
          onChange = {onChange}
          value = {value}
        />
      </>
    )
}

export default Input