import {useState,useEffect} from 'react'
import raectDom from 'react-dom'
import Card from './Card'
import mediaCard from '../data/card'
import { TypeAnimation } from 'react-type-animation';
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
    <div>
      <h1 className='text-4x1  text-left mt-10'>Never loose track of <TypeAnimation text = {media[currentMedia].label}  /></h1>
      <Card cards = {slicedFilteredCards} />
      
    </div>
  )
}

export default Hero