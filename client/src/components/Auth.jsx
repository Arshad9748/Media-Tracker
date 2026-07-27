import {useEffect,useState} from 'react'
import {useLocation,Link} from 'react-router'

const Auth = () => {

const location = useLocation()
const[error,setError] = useState('')
const logIn = location.pathname === '/login'

const handleSubmit  = async (e) => { 

  e.preventDefault()
  setError('')


  const formData = new FormData(e.target)
  const name = formData.get("userName")
  const email = formData.get("email")
  const password = formData.get("password")
  const confirmPassword = formData.get("confirmPassword")
 

if (!logIn && password !== confirmPassword ){
  setError('Password do not match.')
  return }

if(logIn){
  console.log('submit to login',{email,password})
}
else{
  console.log('submit to signup',{userName,email,password})
}
}

  return (
    <div className='min-h-screen w-full flex items-center justify-center font-sniglet bg-pink-100 text-white'>
      <div className='bg-purple-400 p-20 rounded-2xl shadow-lg max-w-md w-full  '>
        <form className='flex flex-col gap-12' onSubmit={handleSubmit}>
         <div className=' relative mb-6 flex  border border-pink-50 rounded-2xl '> 
          <button className={`w-1/2 py-4 z-10 transition-colors ${logIn ? "text-neutral-600" : "text-white"}`}> Log In</button>
          <button className={`w-1/2 py-4 z-10 transition-colors ${logIn ? "text-white" : "text-neutral-600"}`}> Sign Up</button> 
             <div
            className={`absolute top-0 h-full w-1/2 bg-pink-50 rounded-2xl transition-all duration-300 ${
              logIn ? "left-0" : "left-1/2"
            }`}
          ></div>
          </div>
        {!logIn &&
        <input className='border-b-2  border-pink-50 focus:border-pink-50 outline-none' type='text' name='userName' placeholder='User Name' />}
        <input  className='border-b-2  border-pink-50 focus:border-pink-50 outline-none' type='email'name='email' placeholder='Email' />
        <input  className='border-b-2  border-pink-50 focus:border-pink-50 outline-none' type='password' name='password' placeholder='Password' />
        {!logIn &&
        <input className='border-b-2  border-pink-50 focus:border-pink-50 outline-none' type='password'name='confirmPassword' placeholder='Confirm Password' />}
        <button  className='rounded-4xl shadow-lg bg-pink-50 mx-auto py-4 px-8 text-neutral-600'  type='submit'>{logIn ? 'Log In' : 'Sign Up'}</button>
        <p>
          {logIn ? "Don't have an account? " : "Already have an account? "}
          <Link to={logIn ? '/signup' : '/login'} >
          {logIn ? 'Sign Up' : 'Log In'}
          </Link>
        </p>
        
        </form>
      </div>
    </div>
  )
}


export default Auth