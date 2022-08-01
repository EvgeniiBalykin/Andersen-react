import React from 'react';
import './ReadyForm.scss'

function ReadyForm({name, surname, date, number, site, about, stack, project}){
    return (
      <div>
      <h2>{name} {surname}</h2>
      <ul>
        <li> 
          <h5> Date of birth: </h5> 
          <p> {date} </p>
        </li>
        <li> 
          <h5> Phone-number: </h5>
          <p> {number} </p>
        </li>
        <li> 
          <h5> Site: </h5>
          <p> {site} </p>
        </li>
        <li> 
          <h5> About: </h5>
          <p> {about} </p>
        </li>
        <li>
          <h5> Stack: </h5>
          <p> {stack} </p>
        </li>
        <li> 
          <h5> Project: </h5> 
          <p> {project} </p>
        </li>
      </ul>
    </div>
    )
}

export default ReadyForm