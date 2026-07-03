import React from 'react'
import '../App.css'


const Card = ({cards = []}) => {
  return (
    <div className='grid grid-cols-2 animate-breathe w-fit  ml-auto mr-20 p-2 gap-10'> {cards.map((cards) =>{
        return(
        <div className="relative group overflow-hidden rounded-xl shadow-lg aspect-[3/4] w-32 md:w-40  bg-gray-100"
          key = {cards.key}
        >
        <img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        src={cards.image}
        alt = {cards.title}
         />
       </div>
        )
        })}</div>
  )
}

export default Card