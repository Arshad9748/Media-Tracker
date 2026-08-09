import React from 'react'

// Saved item in 'My List
const SavedMediaCard = ({item, onStatusChange, onRemove}) => {
  return (
        <div className="border border-slate-800  rounded-xl overflow-hidden bg-slate-900">
            <img src={item.coverImage} alt={item.title} className="w-full h-[220px] object-cover" />
            <div className="p-3 flex-1 flex flex-col justify-between gap-2">
                <h3 className="text-xs font-bold text-center turncate">{item.title}</h3>
                <select value={item.status} onChange={(e) => onStatusChange(item.id, e.target.value)} className="bg-slate-800 border border-slate-700 text-xs text-teal py-1 px-2 rounded focus:outline-none ">
                    <option value='Plan to Start'>Plan to Start</option>
                    <option value='In Progress'>In Progress</option>
                    <option value='Completed'>Completed</option>
                    <option value='Dropped'>Dropped</option>
                </select>
                <button onClick={() => onRemove(item.id)} className="text-[10px] text-red-400 hover:underline text-center mt-1 " > Remove </button>
            </div>
        </div>
  )
}

export default SavedMediaCard