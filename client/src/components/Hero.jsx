import {useState,useEffect} from 'react'
import raectDom from 'react-dom'

const media = ['movies', 'tv shows', 'books', 'games', 'anime', 'anything']

const Hero = () => {
  const [currentMedia, setCurrentMedia] = useState(0)
  return (
    <div>
      <h1 className='text-4x1 font-bold text-center mt-10'>Never loose track of {'your' + '' + '{media}'}!</h1>
    </div>
  )
}

export default Hero