import React from 'react';
import EducationField from './EducationField';
import NameField from './NameField';
import ExperienceField from './ExperienceField';
import EmailField from './EmailField';
class Form extends React.Component {
  render() {
    return (
      <div className='py-4 px-4 text-sm font-medium text-gray-500'>
        <div className='px-8 bg-white py-8 rounded-lg shadow-lg bg-white gap-2 flex flex-col justify-center'>
          
          <div className = 'flex gap-2'>
            <label htmlFor="name">Name:</label>
            <input onChange={(event)=> this.props.nameInputFunction(event)} type="text" name="name" id="name" className='border-4 rounded-md border-blue-200'/>
            <div><button onClick={() => this.props.nameClickFunction()} className='bg-sky-200 rounded-lg px-2 py-2 hover:bg-white'>submit</button></div>
          </div>
          
          <div className='gap-2 flex'>
            <label htmlFor="name">Email:</label>
            <input onChange={(event)=> this.props.emailInputFunction(event)} type="text" name="name" id="name" className='border-4 border-blue-200'/>
            <div className=''>
              <button onClick={() => this.props.emailClickFunction()} className='bg-sky-200 rounded-lg px-2 py-2 hover:bg-white'>submit</button></div>
          </div>
          
          <div className = 'flex gap-2'>
            <label htmlFor="name">Education:</label>
            <input onChange={(event)=> this.props.educationInputFunction(event)} type="text" name="name" id="name" className='border-4 border-blue-200'/>
            <div>
              <button onClick={() => this.props.educationClickFunction()} className='bg-sky-200 rounded-lg px-2 py-2 hover:bg-white'>submit</button>
            </div>
          </div>
          
          <div className = 'flex gap-2'>
            <label htmlFor="name">Experience:</label>
            <textarea onChange={(event)=> this.props.experienceInputFunction(event)} type="text" name="name" id="name" className='border-4 border-blue-200'/>
            <div>
              <button onClick={() => this.props.experienceClickFunction()} className='bg-sky-200 rounded-lg px-2 py-2 hover:bg-white'>submit</button>
              </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Form