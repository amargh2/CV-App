import React, { Component } from 'react'

export default class NameField extends Component {
  render() {
    return (
      <div className = 'flex gap-2'>
          <label htmlFor="name">Name:</label>
          <input onChange={(event)=> this.props.nameInputFunction(event)} type="text" name="name" id="name" className='border-4 rounded-md border-blue-200'/>
          <div><button onClick={() => this.props.nameClickFunction()} className='bg-sky-200 rounded-lg px-2 py-2 hover:bg-white'>submit</button></div>
      </div>
    )
  }
}
