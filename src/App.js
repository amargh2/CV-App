import './App.css';
import React from 'react';
import Header from './components/Header'
import Form from './components/Form'
import View from './components/View'
import Display from './components/Display';

class App extends React.Component {
  constructor(props) {
    super(props)
    
    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleChangeEmail= this.handleChangeEmail.bind(this);
    this.handleChangeEducation = this.handleChangeEducation.bind(this);
    this.handleChangeExperience = this.handleChangeExperience.bind(this);
    this.handleSubmitClickName = this.handleSubmitClickName.bind(this);
    this.handleSubmitClickEmail = this.handleSubmitClickEmail.bind(this);
    this.handleSubmitClickEducation = this.handleSubmitClickEducation.bind(this);
    this.handleSubmitClickExperience = this.handleSubmitClickExperience.bind(this);

    this.state = {
       nameInput: '',
       emailInput: '',
       educationInput: '',
       experienceInput: '',
       name: '',
       email: '',
       education: '',
       experience: [],
    }
  }
  
  handleChangeName = (event) => {
    this.setState({nameInput: event.target.value})
    console.log(this.state.nameInput)
  }

  handleChangeEmail = (event) => {
    this.setState({emailInput: event.target.value})
  }

  handleChangeEducation = (event) => {
    this.setState({educationInput: event.target.value})
  }

  handleChangeExperience = (event) => {
    this.setState({experienceInput: event.target.value})
  }

  handleSubmitClickName = () => {
    this.setState(
      {name:this.state.nameInput}
    )
  }
  
  handleSubmitClickEmail = () => {
    this.setState(
      {email:this.state.emailInput}
    )
  }
  
  handleSubmitClickExperience = () => {
    const beginningArray = this.state.experience
    const finalArray = beginningArray.concat(this.state.experienceInput)
    this.setState(
      {experience:finalArray},
    )
  }

  handleSubmitClickEducation = () => {
    this.setState(
      {education:this.state.educationInput}
    )
  }

  nameInput = () => {
    console.log(this.state.nameInput)
  }

  listExperience = () => {
    const experienceArray = this.state.experience;
    const listElementArray = experienceArray.map((element) => 
    <li>{element}</li>);
    return listElementArray
  }

  render(){
    return (
      <div className='bg-slate-200'>
        <Header />
        <div className='lg:grid grid-cols-10 gap-2 mx-auto'>
          <div className='col-start-2 col-span-3'>
            <Form 
            nameInputFunction={this.handleChangeName}
            nameClickFunction={this.handleSubmitClickName}
            emailInputFunction={this.handleChangeEmail}
            emailClickFunction={this.handleSubmitClickEmail}
            educationInputFunction = {this.handleChangeEducation}
            educationClickFunction = {this.handleSubmitClickEducation}
            experienceInputFunction = {this.handleChangeExperience}
            experienceClickFunction = {this.handleSubmitClickExperience}
            />
            
          </div>
          <div className='col-start-5 col-span-5'>
            <Display
            name={this.state.name}
            email={this.state.email}
            education={this.state.education}
            experience={this.listExperience}
            />
          </div>
        </div>
      </div>
    )
  }

}


export default App;