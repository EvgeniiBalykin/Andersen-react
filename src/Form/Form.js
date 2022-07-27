import './Form.scss'
import React, {Component} from 'react'
import Button from './Components/Button';
import Input from './Components/Input';
import TextArea from './Components/TextArea';
import Errors from './Components/Errors';
import TextAreaInfo from './Components/TextAreaInfo';
import ReadyForm from './../ReadyForm/ReadyForm';


class Form extends Component {
  constructor(props){
    super(props)
    this.state = {
      input: {},
      errors: {},
      aboutLength: '0/600',
      stackLength: '0/600',
      projectLength: '0/600', 
      createForm: true
    }
    this.onChangeHandler = this.onChangeHandler.bind(this);  
    this.onSubmit = this.onSubmit.bind(this)
    this.onDelete = this.onDelete.bind(this)
  }

  onChangeHandler = event => {
    let input = this.state.input
    let aboutLength = this.state.aboutLength
    let projectLength = this.state.projectLength
    let stackLength = this.state.stackLength

    input[event.target.name] = event.target.value

    if(input[event.target.name] === input['about']){
          aboutLength = `${event.target.value.length}/600`
          if(input['about'].length > 600){
            aboutLength = 'Превышен лимит символов в поле'
          }
    }

    if(input[event.target.name] === input['project']){
      projectLength = `${event.target.value.length}/600`
      if(input['project'].length > 600){
        projectLength = 'Превышен лимит символов в поле'
      }
    }

    if(input[event.target.name] === input['stack']){
      stackLength = `${event.target.value.length}/600`
      if(input['stack'].length > 600){
        stackLength = 'Превышен лимит символов в поле'
      }
    }

    this.setState({
      input,
      aboutLength,
      projectLength,
      stackLength
    })
  }
  
  onDelete = () => {
    this.setState({
      input: {},
      aboutLength: '0/600',
      projectLength: '0/600',
      stackLength: '0/600',
      errors: '',
    })
}

  onSubmit = () => {
    if(this.validate()){
      console.log(this.state.input)
    this.setState({
      createForm: false
    })
    }
    console.log(this.state.input)
  }

  validate = () => {
    let input = this.state.input
    let errors = {}
    let isValid = true

    if(!input['name']) {
      isValid = false
      errors['name'] = 'Please Enter your name'
    } else if(input['name'].charAt(0) === input['name'].charAt(0).toLowerCase()){
      isValid = false
      errors['name'] = 'Enter first letter in Upper case'
    }

    if(!input['surname']) {
      isValid = false
      errors['surname'] = 'Please enter your surname'
    } else if(input['surname'].charAt(0) === input['surname'].charAt(0).toLowerCase()){
      isValid = false
      errors['surname'] = 'Enter first letter in Upper case'
    }

    if(!input['date']) {
      isValid = false 
      errors['date'] = 'Enter your date of birth'
    }

    
    if(!input['number']) {
      isValid = false 
      errors['number'] = 'Enter your number'
    } else if(input['number'] > 12 || input['number'] < 12){
      isValid = false
      errors['number'] = 'Enter the number like 7-7777-77-77'
    }

    if(!input['site']){
      isValid = false
      errors['site'] = 'Enter your site'
    } 

    if(!input['about']) {
      isValid = false
      errors['about'] = 'Enter about you'
    } else if(input['about'].length > 600){
      isValid = false
    }

    if(!input['stack']) {
      isValid = false
      errors['stack'] = 'Enter your stack'
    } else if(input['stack'].length > 600){
      isValid = false
    }

    if(!input['project']) {
      isValid = false
      errors['project'] = 'Enter about your last project'
    } else if(input['project'].length > 600){
      isValid = false
    }

    this.setState({
      errors: errors
    })

    return isValid
  }

  render() {
    return (
      <div className="container">
        <div className={!this.state.createForm ? 'ready-form' : 'ready-form_hidden'}>
          <ReadyForm
            name = {this.state.input.name}
            surname = {this.state.input.surname}
            date = {this.state.input.date}
            number = {this.state.input.number}
            site = {this.state.input.site}
            about = {this.state.input.about}
            stack = {this.state.input.stack}
            project = {this.state.input.project}
          />
        </div>
        <div className={this.state.createForm ? 'form-container' : 'form-container_hidden'}>
        <h1>Create Form</h1>
          <div className='form'>
            <Input 
              type = 'text'
              placeholder = 'Enter your name'
              name = 'name'
              onChange = {this.onChangeHandler}
              title = 'Name'
            />
            <Errors
              error = {this.state.errors.name}
            />
            <Input 
              type = 'text'
              placeholder = 'Enter your surname'
              name = 'surname'
              onChange = {this.onChangeHandler}
              title = 'Surname'
            />
            <Errors
              error = {this.state.errors.surName}
            />
            <Input 
              type = 'date'
              name = 'date'
              onChange = {this.onChangeHandler}
              title = 'Date of birth'
            />
            <Errors
              error = {this.state.errors.date}
            />
            <Input 
              type = 'text'
              name = 'number'
              onChange = {this.onChangeHandler}
              title = 'Enter your number'
            />
            <Errors
              error = {this.state.errors.number}
            />
            <Input 
              
              type = 'text'
              name = 'site'
              onChange = {this.onChangeHandler}
              title = 'Enter your site'
              defaultValue = 'https://'
            />
            <Errors
              error = {this.state.errors.site}
            />
            <TextArea
              type = "text" 
              placeholder = "About You"  
              name = 'about' 
              onChange = {this.onChangeHandler}
              title = 'Enter about you'
            />
            <TextAreaInfo
              error = {this.state.errors.about}
              length = {this.state.aboutLength}
            />
            <TextArea
              type="text" 
              placeholder="Your Stack" 
              name='stack' 
              onChange={this.onChangeHandler}
              title = 'Enter about stack'
            />
            <TextAreaInfo
              error = {this.state.errors.stack}
              length = {this.state.stackLength}
            />          
            <TextArea
              type = "text" 
              placeholder = "Your Project"
              name = 'project' 
              onChange = {this.onChangeHandler}
              title = 'Describe your last project'
            />
            <TextAreaInfo
              error = {this.state.errors.project}
              length = {this.state.projectLength}
            />        
          </div>
          <div className='buttons'>
            <Button type='clear' onClick={this.onDelete} title='Clear'/>
            <Button type='submit' onClick={this.onSubmit} title='Submit'/>
          </div>
          </div>
      </div>
    )
  }
}

export default Form