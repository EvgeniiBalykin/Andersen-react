import './Form.scss'
import React, {Component} from 'react'

class Form extends Component {
  constructor(props){
    super(props)
    this.state = {
      name: '', 
      surname: '',
      dateOfBirth: '',
      number: '',
      site: '',
      about: '', 
      stack: '',
      project: ''
    }
    this.onChangeHandler = this.onChangeHandler.bind(this);  
    this.onSubmit = this.onSubmit.bind(this)
    this.onDelete = this.onDelete.bind(this)
  }

  onChangeHandler = event => {
    this.setState({
      [event.target.name]: event.target.value    
    })
  }

  onSubmit = () => {
    console.log(this.state)
  }

  onDelete = () => {
  }

  render() {
    return (
      <div class="container">
        <h1>Create Form</h1>
          <div className='form'>
            <label for="name"><b>Name</b></label>
            <input type="text" placeholder="Enter Name" name='name' onChange={this.onChangeHandler}/>
            <label for="surname"><b>Surname</b></label>
            <input type="text" placeholder="Enter Surname" name='surname' onChange={this.onChangeHandler}/>
            <label for="date"><b>Date Of Birth</b></label>
            <input type="text" placeholder="MM/DD/YYYY" name='dateOfBitrh' onChange={this.onChangeHandler}/>
            <label for="phone"><b>Phone Number</b></label>
            <input type="number" placeholder="Enter Number" name='number' onChange={this.onChangeHandler}/>
            <label for="site"><b>Your Site</b></label>
            <input type="text" placeholder="Enter Site" name='site' onChange={this.onChangeHandler}/>
            <label for="about"><b>About You</b></label>
            <p><textarea type="text" placeholder="About You" cols="50" rows="7" name='about' onChange={this.onChangeHandler}></textarea></p>
            <label for="stack"><b>Your Stack</b></label>
            <p><textarea type="text" placeholder="Your Stack" cols="50" rows="7" name='stack' onChange={this.onChangeHandler}></textarea></p>
            <label for="project"><b>Your Last Project</b></label>
            <p><textarea type="text" placeholder="Your Project" cols="50" rows="7" name='project' onChange={this.onChangeHandler}></textarea></p>
          </div>
          <div className='buttons'>
            <button type="cancel" className="calncel-btn" onClick={this.onDelete}>Сбросить</button>
            <button type="submit" className="submit-btn" onClick={this.onSubmit}>Сохранить</button>
          </div>
      </div>
    )
  }
}

export default Form