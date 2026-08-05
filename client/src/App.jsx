import {Route,Routes} from 'react-router'
import Landingpage from './pages/Landingpage'
import Auth from './pages/Auth'
import ProtectedRoute from './components/ProtectedRoute'
import Layout from './components/Layout'
import Dashboard from './pages/Dashboard'
import Books from './pages/Books'
import Games from './pages/Games'
import Animes from './pages/Animes'
import Movies from './pages/Movies'
import Tvshows from './pages/Tvshows'
import './App.css'


function App() {
  

  return (
    <Routes>
      <Route path='/' element={<Landingpage/>}  />
      <Route path='/login' element={<Auth/> }/>
      <Route path='/signup' element={<Auth/>} />
      <Route path='/dashboard' element={<ProtectedRoute><Layout><Dashboard/></Layout></ProtectedRoute>} />
      <Route path='/book' element={<ProtectedRoute><Layout><Books/></Layout></ProtectedRoute>} />
      <Route path='/game' element={<ProtectedRoute><Layout><Games/></Layout></ProtectedRoute>} />
      <Route path='/anime' element={<ProtectedRoute><Layout><Animes/></Layout></ProtectedRoute>} />
      <Route path='/movie' element={<ProtectedRoute><Layout><Movies/></Layout></ProtectedRoute>} />
      <Route path='/tvshow' element={<ProtectedRoute><Layout><Tvshows/></Layout></ProtectedRoute>} />
      
      </Routes>
  )
}

export default App
