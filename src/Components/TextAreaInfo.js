import React from 'react';

function TextAreaInfo({error, length}){
    return (
      <div style={{display: 'flex', justifyContent: 'space-between'}}>
        <p className="text-error">{error}</p>
        <p style={{textAlign: 'right'}}>{length}</p>
      </div>    
    )
}

export default TextAreaInfo