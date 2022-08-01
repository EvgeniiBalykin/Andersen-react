import React from 'react';

function Button({type, onClick, title}){
    return(
      <button 
        className={type === 'submit' ? 'submit-btn' : 'cancel-btn'}
        type={type}
        onClick={onClick}
      >
          {title}
      </button>
    )
}

export default Button