import React from 'react';

function TextArea({type, placeholder, name, onChange, title, value}){
    return(
      <>
        <label>
          {title}
        </label>
        <textarea 
          type = {type}
          placeholder = {placeholder}
          name = {name}
          onChange = {onChange}
          cols = '50'
          rows = '7'
          value={value}
        ></textarea>
      </>
    )
}

export default TextArea