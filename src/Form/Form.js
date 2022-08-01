import React, {useState} from "react";
import Button from "../Components/Button";
import Error from "../Components/Error";
import Input from "../Components/Input";
import TextArea from "../Components/TeaxtArea";
import TextAreaInfo from "../Components/TextAreaInfo";
import ReadyForm from "../ReadyForm/ReadyForm";
import './Form.scss'

function Form() {
  const [values, setValues] = useState({
    name: '',
    surName: '',
    date: '',
    number: '',
    site: 'https://',
    about: '',
    stack: '',
    project: '',
  }) 

  const [readyForm, setReadyForm] = useState(false)
  const [nameError, setNameError] = useState('')
  const [surNameError, setSurNameError] = useState('')
  const [dateError, setDateError] = useState('')
  const [numberError, setNumberError] = useState('')
  const [siteError, setSiteError] = useState('')
  const [aboutError, setAboutError] = useState('')
  const [stackError, setStackError] = useState('')
  const [projectError, setProjectError] = useState('')

  const onChange = (event) => {
    setValues({...values, [event.target.name]: event.target.value})
  }

  const onDelete = (event) => {
    event.preventDefault()
    setValues({
      name: '',
      surName: '',
      date: '',
      number: '',
      site: '',
      about: '',
      stack: '',
      project: '',
    })
    setSurNameError('')
    setNameError('')
    setDateError('')
    setNumberError('')
    setSiteError('')
    setAboutError('')
    setStackError('')
    setProjectError('')
  }

  const onSubmit = (event) => {
    event.preventDefault()
    if(validate()){
      setReadyForm(true)
    }
  }

  const validate = () => {
    let isValid = true 
    if(values.name === ''){
      isValid = false
      setNameError('Enter your name')
    } else if(values.name.charAt(0) === values.name.charAt(0).toLowerCase()){
      isValid = false
      setNameError('Name should start with a capital letter')
    } else {
      setNameError('')
    }
    
    if(values.surName === ''){
      isValid = false
      setSurNameError('Enter your surname')
    } else if(values.surName.charAt(0) === values.surName.charAt(0).toLowerCase()){
      isValid = false
      setSurNameError('Surname should start with a capital letter')
    } else {
      setSurNameError('')
    }

    if(values.date === ''){
      isValid = false
      setDateError('Enter your date of birth')
    } else {
      setDateError('')
    }

    if(values.number === '') {
      isValid = false
      setNumberError('Enter your number') 
    } else if(values.number.length > 12 || values.number.length < 12){
      isValid = false
      setNumberError('Enter the number like 7-7777-77-77') 
    } else {
      setNumberError('')
    }

    if(values.site === ''){
      isValid = false
      setSiteError('Enter your site')
    } else {
      setSiteError('')
    }

    if(values.about === ''){
      isValid = false
      setAboutError('Enter about')
    } else if(values.about.length > 600) {
      isValid = false
      setAboutError('Limit is 600')
    } else {
      setAboutError('')
    }

    if(values.stack === ''){
      isValid = false
      setStackError('Enter your stack')
    } else {
      setStackError('')
    }

    if(values.project === ''){
      isValid = false
      setProjectError('Enter about your last project')
    } else {
      setProjectError('')
    }

    return isValid
  }

  return(
    <div className="container">
    <div className={readyForm ? 'ready-form' : 'ready-form_hidden'}>
      <ReadyForm
        name = {values.name}
        surname = {values.surName}
        date = {values.date}
        number = {values.number}
        site = {values.site}
        about = {values.about}
        stack = {values.stack}
        project = {values.project}
      />
    </div>
    <form className={!readyForm ? 'form-container' : 'form-container_hidden'}>
    <h1>Create Form</h1>
      <div className='form'>
        <Input 
          type = 'text'
          placeholder = 'Enter your name'
          name = 'name'
          onChange = {onChange}
          title = 'Name'
          value={values.name}
        />
        <Error errorMessage={nameError}/>
        <Input 
          type = 'text'
          placeholder = 'Enter your surname'
          name = 'surName'
          onChange = {onChange}
          title = 'Surname'
          value={values.surName}
        />
        <Error errorMessage={surNameError}/>
        <Input 
          type = 'date'
          name = 'date'
          onChange = {onChange}
          title = 'Date of birth'
          value = {values.date}
        />
        <Error errorMessage={dateError}/>
        <Input 
          type = 'text'
          placeholder = 'Enter your number'
          name = 'number'
          onChange = {onChange}
          title = 'Enter your number'
          value={values.number}
        />
        <Error errorMessage={numberError}/>
        <Input 
          type = 'text'
          placeholder = 'Enter your site'
          name = 'site'
          onChange = {onChange}
          title = 'Enter your site'
          value={values.site}
        />
        <Error errorMessage={siteError}/>
        <TextArea
          type = "text" 
          placeholder = "About You"  
          name = 'about' 
          onChange = {onChange}
          title = 'Enter about you'
          value={values.about}
        />
        <TextAreaInfo error={aboutError} length={values.about.length < 600 ? `${values.about.length}/600` : `Превышен лимит`}/>
        <TextArea
          type="text" 
          placeholder="Your Stack" 
          name='stack' 
          onChange = {onChange}
          title = 'Enter about stack'
          value={values.stack}
        />
        <TextAreaInfo error={stackError} length={values.stack.length < 600 ? `${values.stack.length}/600` : `Превышен лимит`}/>
        <TextArea
          type = "text" 
          placeholder = "Your Project"
          name = 'project' 
          onChange = {onChange}
          title = 'Describe your last project'
          value={values.project}
        />    
        <TextAreaInfo error={projectError} length={values.project.length < 600 ? `${values.project.length}/600` : `Превышен лимит`}/>
      </div>
      <div className='buttons'>
        <Button type='clear' onClick={onDelete} title='Clear'/>
        <Button type='submit' onClick={onSubmit} title='Submit'/>
      </div>
      </form>
  </div>
  )
}

export default Form