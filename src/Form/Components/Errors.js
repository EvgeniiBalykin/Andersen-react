import React, { Component } from 'react';

class Errors extends Component{
  render(){
    const {error} = this.props
    return(
      <div className="text-error">{error}</div>
    )
  }
}

export default Errors