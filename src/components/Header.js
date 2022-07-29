import React from 'react';

class Header extends React.Component {
  render() {
    return (
      <div className="flex justify-center bg-sky-200 text-slate-800 py-4 shadow-lg">
        <h1 className='text-4xl'>Your CV</h1>
      </div>
    )
  }
}

export default Header