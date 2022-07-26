import './Form.scss'
import React, {Component} from 'react'


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
    this.name.value = ''
    this.surname.value = ''
    this.date.value = ''
    this.number.value = ''
    this.site.value = ''
    this.about.value = ''
    this.stack.value = ''
    this.project.value = ''
    this.setState({
      input: {},
      aboutLength: '0/600',
      projectLength: '0/600',
      stackLength: '0/600'
    })
}

  onSubmit = () => {
    if(this.validate()){
      console.log(this.state.input)
    this.setState({
      createForm: false
    })
    }
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
      errors['stack'] = 'Enter about you'
    } else if(input['stack'].length > 600){
      isValid = false
    }

    if(!input['project']) {
      isValid = false
      errors['project'] = 'Enter about you'
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
          <table>
            <h1>{this.state.input.name} {this.state.input.surname}</h1>
            <ul>
              <li>Date of birth: <text>{this.state.input.date}</text></li>
              <li>Phone-number: <text>{this.state.input.number}</text></li>
              <li>Site: <text>{this.state.input.site}</text></li>
              <li>About: <text>{this.state.input.about}</text></li>
              <li>Stack: <text>{this.state.input.stack}</text></li>
              <li>Last project: <text>{this.state.input.project}</text></li>
            </ul>
          </table>
        </div>
        <div className={this.state.createForm ? 'form-container' : 'form-container_hidden'}>
        <h1>Create Form</h1>
          <div className='form'>
            <label htmlFor="name"><b>Name</b></label>
            <input ref={(ref) => this.name= ref} type="text" placeholder="Enter Name" name='name' onChange={this.onChangeHandler}/>
            <div className="text-error">{this.state.errors.name}</div>
            <label htmlFor="surname"><b>Surname</b></label>
            <input ref={(ref) => this.surname= ref} type="text" placeholder="Enter Surname" name='surname' onChange={this.onChangeHandler}/>
            <div className="text-error">{this.state.errors.surname}</div>
            <label htmlFor="date"><b>Date Of Birth</b></label>
            <input ref={(ref) => this.date= ref} type="date" name='date' onChange={this.onChangeHandler}/>
            <div className="text-error">{this.state.errors.date}</div>
            <label htmlFor="phone"><b>Phone Number</b></label>
            <input ref={(ref) => this.number= ref} type="text" placeholder="Enter Number" name='number' onChange={this.onChangeHandler}/>
            <div className="text-error">{this.state.errors.number}</div>
            <label htmlFor="site"><b>Your Site</b></label>
            <input ref={(ref) => this.site= ref} type="text" placeholder="Enter Site" defaultValue={'https://'} name='site' onChange={this.onChangeHandler}/>
            <div className="text-error">{this.state.errors.site}</div>
            <label htmlFor="about"><b>About You</b></label>
            <textarea ref={(ref) => this.about= ref} type="text" placeholder="About You" cols="50" rows="7" name='about' onChange={this.onChangeHandler}></textarea>
              <div style={{display: 'flex', justifyContent: 'space-between'}}>
                <p className="text-error">{this.state.errors.about}</p>
                <p style={{textAlign: 'right'}}>{this.state.aboutLength}</p>
              </div>
            <label htmlFor="stack"><b>Your Stack</b></label>
            <textarea ref={(ref) => this.stack= ref} type="text" placeholder="Your Stack" cols="50" rows="7" name='stack' onChange={this.onChangeHandler}></textarea>
            <div style={{display: 'flex', justifyContent: 'space-between'}}>
                <p className="text-error">{this.state.errors.stack}</p>
                <p style={{textAlign: 'right'}}>{this.state.stackLength}</p>
              </div>            <label htmlFor="project"><b>Your Last Project</b></label>
            <textarea ref={(ref) => this.project= ref} type="text" placeholder="Your Project" cols="50" rows="7" name='project' onChange={this.onChangeHandler}></textarea>
            <div style={{display: 'flex', justifyContent: 'space-between'}}>
                <p className="text-error">{this.state.errors.project}</p>
                <p style={{textAlign: 'right'}}>{this.state.projectLength}</p>
            </div>          
          </div>
          <div className='buttons'>
            <button type="cancel" className="calncel-btn" onClick={this.onDelete}>Сбросить</button>
            <button type="submit" className="submit-btn" onClick={this.onSubmit}>Сохранить</button>
          </div>
          </div>
      </div>
    )
  }
}

export default Form