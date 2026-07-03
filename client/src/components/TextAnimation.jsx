import {useState,useEffect} from 'react'
import Hero from './Hero'

const TextAnimation = (text) => {
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setisdeleting] = useState(false);

   useEffect( ()=>{
    const interval = setInterval(()=>{
      displayText.slice(0, text.length).map((char,index) => {
        setDIsplayText((prev) => prev + char)
      })


    }, 100)
   }, [])
    
  return (
    
  )
}

export default TextAnimation