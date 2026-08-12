import React from 'react'

// Search API result 
const SearchResultCard = ({item, isSaved, onAdd}) => {
  return (
            <div className="group relative border border-slate-800 rounded-xl overflow-hidden bg-slate-900/60 flex flex-col hover:border-slate-600 transition-all duration-200">
            <div className="relative w-full h-48 sm:h-60 overflow-hidden">
                <img src= {item.coverImage} alt={item.title} className="w-full h-full object-cover md:group-hover:scale-105 transition-transform duration-300"   />
                <div className="hidden md:flex absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity items-center justify-center p-2">
                <button onClick={()=> onAdd(item)} disabled={isSaved} className={` font-bold py-2 px-3 rounded-lg text-xs  transition-colors shadow-lg ${isSaved ? 'bg-slate-700 text-slate-300 cursor-not-allowed' : 'bg-slate-500 hover:bg-teal hover:text-black text-white' } ` } >
                    {isSaved ? 'In List' : '+ Add to List'}
                </button>
                </div>
            </div>
            <div className="p-2.5 sm:p-3 w-full flex-1 flex flex-col items-center justify-between gap-2 bg-slate-900">
                <h3 className="text-xs font-bold text-center leading-snug line-clamp-2 text-white">
                    {item.title}
                </h3>
                <button 
                    onClick={() => onAdd(item)} 
                    disabled={isSaved} 
                    className={`md:hidden w-full py-1.5 px-2 rounded text-[11px] font-bold transition-colors ${
                     isSaved ? 'bg-slate-800 text-slate-400' : 'bg-teal text-black'
                 }`}
            >
                {isSaved ? 'In List' : '+ Add'}
            </button>
            </div>
        </div>
  )
}

export default SearchResultCard