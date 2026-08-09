import React from 'react'
import {Link} from 'react-router'
import SignUp from '../pages/Auth'



const Navbar = () => {
  return (
    <div>
      <header className='flex flex-row items-center justify-between w-11/12 mx-auto max-w-6xl px-6 py-4 bg-gray-800  rounded-4xl shadow-lg font-sniglet text-white'>
     <h1 className=' text-lg font-bold '>Wilhelm Tracker</h1>
     
     
    <div className='flex gap-2'>

      <Link to='/signup' className='hover:text-teal'>
        Sign Up
      </Link>
      <Link to='/login' className='hover:text-teal'>
        Log In
      </Link>
      
      </div> 
      </header>
    </div>
  )
}

export default Navbar