import {useEffect,useState} from 'react'
import {useLocation,Link,useNavigate} from 'react-router'
import axios from 'axios'


const Auth = () => {

const location = useLocation()
const[error,setError] = useState('')
const logIn = location.pathname === '/login'
const [loading, setLoading] = useState(false)
const navigate = useNavigate()

const handleSubmit  = async (e) => { 

  e.preventDefault()
  setError('')


  const formData = new FormData(e.target)
  const userName = formData.get("userName")
  const email = formData.get("email")
  const password = formData.get("password")
  const confirmPassword = formData.get("confirmPassword")
  
 

if (!logIn && password !== confirmPassword ){
  setError('Password do not match.')
  return }
if (!email || !password ){
  setError('Please fill in all required fields.')
  return
}
try{
  setLoading(true)
  const BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000'
  const url = logIn ? `${BASE_URL}/api/auth/login` : `${BASE_URL}/api/auth/register`
  const body =logIn ? {email,password} : {userName,email,password}
  const res = await axios.post(url,body)
  localStorage.setItem('token', res.data.token)
  localStorage.setItem('user', JSON.stringify(res.data.user))
  setLoading(false)
  navigate ('/dashboard')
} 
catch(err){
  setLoading(false)
  setError(err.response?.data?.message || 'Something went wrong')
}

}

  return (
    <div className='min-h-screen w-full flex items-center justify-center font-sniglet bg-gray-950 text-white'>
      <div className='bg-slate-900 p-6 sm:p-10 md:p-20 rounded-2xl shadow-lg max-w-md w-full  '>
        <form className='flex flex-col gap-6 sm:gap-8 md:gap-12' onSubmit={handleSubmit}>
         <div className=' relative mb-6 flex  border border-teal rounded-2xl '> 
          <button className={`w-1/2 py-3 sm:py-4 z-10 transition-colors  ${logIn ? "text-neutral-800" : "text-white hover:text-teal"}`} type= 'button' onClick={() => navigate('/login')}> Log In</button>
          <button className={`w-1/2 py-3 sm:py-4 z-10 transition-colors  ${logIn ? "text-white hover:text-teal" : "text-neutral-800"}`} type='button' onClick={() => navigate('/signup')}> Sign Up</button> 
             <div
            className={`absolute top-0 h-full w-1/2 bg-teal rounded-2xl transition-all duration-300 ${
              logIn ? "left-0" : "left-1/2"
            }`}
          ></div>
          </div>
        {error && (
          <div className="bg-red-500/20 border border-red-500/50 text-red-400 text-sm px-4 py-3 rounded-lg">
              {error}
          </div>
            )}
        {!logIn &&
        <input className='border-b-2  border-teal focus:border-teal outline-none' type='text' name='userName' placeholder='User Name' />}
        <input  className='border-b-2  border-teal focus:border-teal outline-none' type='email'name='email' placeholder='Email' />
        <input  className='border-b-2  border-teal focus:border-teal outline-none' type='password' name='password' placeholder='Password' />
        {!logIn &&
        <input className='border-b-2  border-teal focus:border-teal outline-none' type='password'name='confirmPassword' placeholder='Confirm Password' />}
        <button  className= {`rounded-4xl shadow-lg bg-teal mx-auto py-3 px-6 sm:py-4 sm:px-8 text-neutral-800 ${loading ? 'opacity-50 cursor-not-allowed' : 'hover:opacity-90'}`}  type='submit' disabled={loading}>{loading ? 'Please wait...' : logIn ? 'Log In' : 'Sign Up'}</button>
        <p className='text-sm sm:text:base'>
          {logIn ? "Don't have an account? " : "Already have an account? "}
          <Link  to={logIn ? '/signup' : '/login'} className='hover:text-teal' >
          {logIn ? 'Sign Up' : 'Log In'}
          </Link>
        </p>
        
        </form>
      </div>
    </div>
  )
}


export default Auth