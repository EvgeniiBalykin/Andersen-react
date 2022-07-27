import React, { Component } from 'react';

class TextAreaInfo extends Component{
  render(){
    const {error, length} = this.props
    return (
      <div style={{display: 'flex', justifyContent: 'space-between'}}>
        <p className="text-error">{error}</p>
        <p style={{textAlign: 'right'}}>{length}</p>
      </div>    
    )
  }
}

export default TextAreaInfo