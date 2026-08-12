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
    <div className = 'flex flex-col md:flex-row justify-between items-start sm:mt-16 text-white mb-14'>
      <div className='w-full md:w-1/2'>
         <h1 className='font-jakarta font-medium text-xl sm:text-4xl lg:text-5xl  text-center md:text-left  pt-20 md:pt-55 px-4 md:pl-8 tracking-[0.1em] '>Never lose track of <TextAnimation key={currentMedia} text = {media[currentMedia].label}  /></h1>
      </div>
      <div className = 'mt-10 w-full md:w-1/2 flex justify-center md:justify-end md:pr-10'>
      <Card cards = {slicedFilteredCards} />
      </div>
    </div>
  )
}

export default Hero