import {useState,useEffect} from 'react'
import raectDom from 'react-dom'
import Card from './Card'
import mediaCard from '../data/card'
import '../App.css'
import TextAnimation from './TextAnimation';

const media = [{type:'movie', label: 'movies'},{type:'tv show', label:'tv shows'},{type:'book',label:'books'},{type:'game', label:'games'},{type:'anime', label:'animes'},{type:'anything', label: 'anything'}]

const Hero = () => {
  const [currentMedia, setCurrentMedia] = useState(0)
  const batchSize = 4
  useEffect(() => {
    // set up a timer to change the current media every 6 seconds
    const interval = setInterval(() => {
      setCurrentMedia((prevMedia)=> (prevMedia + 1) % media.length)
    },6000)
    // cleanup timer on component unmount
    return() => clearInterval(interval)
  },[])
  const activeType = media[currentMedia].type
  const filteredCards = mediaCard.filter((card) => card.type.toLowerCase() === activeType)
  const slicedFilteredCards = filteredCards.slice(0,batchSize)

  return (
    <div className = 'flex justify-between items-start'>
      <div>
         <h1 className='font-jakarta font-medium text-7xl text-left pt-55 pl-8 tracking-[0.1em] '>Never lose track of <TextAnimation key={currentMedia} text = {media[currentMedia].label}  /></h1>
      </div>
      <div className = 'mt-10'>
      <Card cards = {slicedFilteredCards} />
      </div>
    </div>
  )
}

export default Hero