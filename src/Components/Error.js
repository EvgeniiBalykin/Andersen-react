import React from 'react';

function Error({errorMessage}){
    return(
      <div className="text-error">{errorMessage}</div>
    )
}

export default Error