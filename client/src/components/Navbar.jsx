import React from 'react'
import SignUp from './SignUp'
import SignIn from './SignIn'


const Navbar = () => {
  return (
    <div>
      <header className='flex flex-row items-center justify-between w-11/12 mx-auto max-w-6xl px-6 py-4 bg-purple-300  rounded-4xl shadow-lg font-sniglet text-white'>
     <h1 className=' text-lg font-bold '>Wilhelm Tracker</h1>
     <div className='flex gap-2'>
      <SignUp className='bg-yellow-500 text-white rounded-xl' />
      <SignIn className='bg-yellow-500 text-white rounded-xl'/></div>
      </header>
    </div>
  )
}

export default Navbar