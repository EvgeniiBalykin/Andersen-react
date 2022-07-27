import React, { Component } from 'react';

class Button extends Component{
  render(){
    const {type, onClick, title} = this.props
    return(
      <>
        <button 
          className={type === 'submit' ? 'submit-btn' : 'cancel-btn'}
          type={type}
          onClick={onClick}
        >
            {title}
        </button>
      </>
    )
  }
}

export default Button 