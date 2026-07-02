import React from 'react'


const Card = ({cards = []}) => {
  return (
    <div className='grid grid-cols-2 gap-4 p-4'> {cards.map((cards) =>{
        return(
        <div className="relative group overflow-hidden rounded-xl shadow-lg aspect-[3/4] w-32 md:w-40 bg-gray-100"
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