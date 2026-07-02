import {useState,useEffect} from 'react'
import raectDom from 'react-dom'
import Card from './Card'
import mediaCard from '../data/card'

const media = ['movies', 'tv shows', 'books', 'games', 'anime', 'anything']

const Hero = () => {
  const [currentMedia, setCurrentMedia] = useState(0)
  useEffect(() => {
    // set up a timer to change the current media every 2 seconds
    const interval = setInterval(() => {
      setCurrentMedia((prevMedia)=> (prevMedia + 1) % media.length)
    },2000)
    // cleanup timer on component unmount
    return() => clearInterval(interval)
  },[])

  const activeType = media[currentMedia]
  const filteredCards = mediaCard.filter((card) => card.type.toLowerCase() === activeType)

  return (
    <div>
      <h1 className='text-4x1 font-bold text-left mt-10'>Never loose track of <span className='text-blue-500'>{media[currentMedia]}</span></h1>
      <card cards = {filteredCards} />
      
    </div>
  )
}

export default Hero