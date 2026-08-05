import React from 'react'
import {Link} from 'react-router'
import SignUp from '../pages/Auth'



const Navbar = () => {
  return (
    <div>
      <header className='flex flex-row items-center justify-between w-11/12 mx-auto max-w-6xl px-6 py-4 bg-purple-300  rounded-4xl shadow-lg font-sniglet text-white'>
     <h1 className=' text-lg font-bold '>Wilhelm Tracker</h1>
     
     
    <div className='flex gap-2'>

      <Link to='/signup'>
        Sign Up
      </Link>
      <Link to='/login' >
        Log In
      </Link>
      
      </div> 
      </header>
    </div>
  )
}

export default Navbar