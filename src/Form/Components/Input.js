import React, { Component } from 'react';

class Input extends Component{
  render(){
    const {type, placeholder, name, onChange, title, value, defaultValue} = this.props
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
          defaultValue = {defaultValue}
        />
      </>
    )
  }
}

export default Input