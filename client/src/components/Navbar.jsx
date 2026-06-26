import React from 'react'
import SignUp from './SignUp'
import SignIn from './SignIn'


const Navbar = () => {
  return (
    <div>
      <header className='flex flex-row items-center justify-between p-4 bg-gray-800 text-white'>
        <h1 className='text-lg font-bold'>Wilhelm Tracker</h1>
      <SignUp className='bg-yellow-500 text-white' />
      <SignIn className='bg-yellow-500 text-white'/>
      </header>
    </div>
  )
}

export default Navbar