import React, { Component } from 'react';

class Input extends Component{
  render(){
    const {type, placeholder, name, onChange, title} = this.props
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
        />
      </>
    )
  }
}

export default Input