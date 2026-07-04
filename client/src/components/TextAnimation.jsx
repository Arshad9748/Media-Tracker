import {useState,useEffect} from 'react'


const TextAnimation = ({text}) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

   useEffect( ()=>{
    const interval = setInterval(()=>{
      setCurrentIndex((prevIndex)=> {
        if (isDeleting) {
          if (prevIndex > 0){
            return prevIndex - 1   
          }
          if(prevIndex === 0){
             setIsDeleting(false)
             return prevIndex
          }
        } 
        
        else {
          if(prevIndex < text.length){
            return prevIndex + 1}
         
            return prevIndex
          
        }
      })
    }, 160)
    return () => clearInterval(interval)
   }, [text, isDeleting])

   useEffect(() => {
    let timeout 
    if (currentIndex === text.length && !isDeleting) {
    timeout = setTimeout(() => setIsDeleting(true), 4000)
     }
     return () => clearTimeout(timeout)
   },[currentIndex, isDeleting, text])

   useEffect(() => {
  setCurrentIndex(0);
  setIsDeleting(false)
}, [text])
    
  return (
    <span>{text.slice(0, currentIndex)}
     <span className="animate-pulse">|</span>
    </span>
   
  )
}

export default TextAnimation