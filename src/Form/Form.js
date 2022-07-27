import './Form.scss'
import React, {Component} from 'react'
import Button from './Components/Button';
import Input from './Components/Input';
import TextArea from './Components/TextArea';

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
  }

  onChangeHandler = event => {
    this.setState({
      [event.target.name]: event.target.value    
    })
  }

  onSubmit = () => {
    console.log(this.state)
  }

  render() {
    return (
      <div className="container">
        <h1>Create Form</h1>
        <div className='form'>
          <Input 
            type = 'text'
            placeholder = 'Enter your name'
            name = 'name'
            onChange = {this.onChangeHandler}
            title = 'Name'
          />
          <Input 
            type = 'text'
            placeholder = 'Enter your surname'
            name = 'surname'
            onChange = {this.onChangeHandler}
            title = 'Surname'
          />
          <Input 
            type = 'date'
            name = 'date'
            onChange = {this.onChangeHandler}
            title = 'Date of birth'
          />
          <Input 
            type = 'text'
            name = 'number'
            onChange = {this.onChangeHandler}
            title = 'Enter your number'
          />
          <Input 
            type = 'text'
            name = 'site'
            onChange = {this.onChangeHandler}
            title = 'Enter your site'
            defaultValue = 'https://'
          />
          <TextArea
            type = "text" 
            placeholder = "About You"  
            name = 'about' 
            onChange = {this.onChangeHandler}
            title = 'Enter about you'
          />
          <TextArea
            type="text" 
            placeholder="Your Stack" 
            name='stack' 
            onChange={this.onChangeHandler}
            title = 'Enter about stack'
          />    
          <TextArea
            type = "text" 
            placeholder = "Your Project"
            name = 'project' 
            onChange = {this.onChangeHandler}
            title = 'Describe your last project'
          /> 
        </div>
        <div className='buttons'>
          <Button type='clear' title='Clear'/>
          <Button type='submit' onClick={this.onSubmit} title='Submit'/>
        </div>      
      </div>
    )
  }
}

export default Form