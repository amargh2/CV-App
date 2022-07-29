import React, { Component } from 'react'

export default class ExperienceField extends Component {
  render() {
    return (
      <div className = 'flex gap-2'>
        <label htmlFor="name">Experience:</label>
          <textarea onChange={(event)=> this.props.experienceInputFunction(event)} type="text" name="name" id="name" className='border-4 border-blue-200'/>
          <div>
            <button onClick={() => this.props.experienceClickFunction()} className='bg-sky-200 rounded-lg px-2 py-2 hover:bg-white'>submit</button>
          </div>
      </div>
    )
  }
}
