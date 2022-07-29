import React, { Component } from 'react'

export default class EmailField extends Component {
  render() {
    return (
      <div className='gap-2 flex'>
          <label htmlFor="name">Email:</label>
          <input onChange={(event)=> this.props.emailInputFunction(event)} type="text" name="name" id="name" className='border-4 border-blue-200'/>
          <div className=''>
            <button onClick={() => this.props.emailClickFunction()} className='bg-sky-200 rounded-lg px-2 py-2 hover:bg-white'>submit</button></div>
          </div>      
    )
  }
}