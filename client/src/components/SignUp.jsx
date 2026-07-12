import {useEffect,useState} from 'react'

const SignUp = () => {

const 
const[signIn,setSignIn] = useState()
  return (
    <div>
      <div>
        <input type='text' placeholder='Enter your username.'>User Name:</input>
        <input type='email' placeholder='Enter your email address.'>E-mail:</input>
        <input type='password' placeholder='Enter your password.'>Password:</input>
        <input type='password' placeholder='Confirm your password.'>Confirm Password:</input>
        <button type='submit'>Sign In</button>
        <butoon type='submit'>Sign Up</butoon> 
      </div>
    </div>
  )
}

export default SignUp