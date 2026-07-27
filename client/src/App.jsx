import { useState } from 'react'
import {Route,Routes} from 'react-router'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import Landingpage from './components/Landingpage'
import Auth from './components/Auth'
import './App.css'


function App() {
  

  return (
    <Routes>
      <Route path='/' element={<Landingpage/>}  />
      <Route path='/login' element={<Auth/> }/>
      <Route path='/signUp' element={<Auth/>} />
    </Routes>
  )
}

export default App
