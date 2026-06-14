import React from 'react'
import Anime from './Anime'
import Books from './Books'
import CreateAccount from './CreateAccount'
import SignIn from './SignIn'
import Games from './Games'
import Movies from './Movies'
import TvSeries from './TvSeries'

const Navbar = () => {
  return (
    <div>
      <Anime />
      <Books />
      <CreateAccount />
      <SignIn />
      <Games />
      <Movies />
      <TvSeries />
    </div>
  )
}

export default Navbar