import React, { Component } from 'react';

class TextArea extends Component{
  render(){
    const {ref, type, placeholder, name, onChange, title} = this.props
    return(
      <>
        <label>
          {title}
        </label>
        <textarea 
          ref = {ref}
          type = {type}
          placeholder = {placeholder}
          name = {name}
          onChange = {onChange}
          cols = '50'
          rows = '7'
        ></textarea>
      </>
    )
  }
}

export default TextArea