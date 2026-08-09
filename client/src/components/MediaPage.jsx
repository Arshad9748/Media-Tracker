import { useState, useEffect } from "react"
import { searchMedia, addToList, getList, updateStatus, removeFromList} from "../services/api.js"
import SearchResultCard from "./SearchResultCard.jsx"
import SavedMediaCard from "./SavedMediaCard.jsx"


const MediaPage = ({title, mediaType, placeholder}) => {
  const [activeTab,setActiveTab] = useState('search')  
  const [results, setResults] = useState([])
  const [loading, setLoading] = useState(false)
  const [query, setQuery] = useState('')
  const [savedList, setSavedList] = useState([])


// Debouncing, to let the user type before making a api call
  useEffect(() =>{
    if (!query.trim()){
      setResults([])
      return
    }
        const timer = setTimeout(async () => {
          setLoading(true)
          const data = await searchMedia(mediaType, query)
          setResults(data)
          setLoading(false)
        },400)

        return() => clearTimeout(timer)
    }, [query, mediaType])


    //Adding the media to a list 
  const handleAddToList = async (item) => {
    // Preventing duplicate entries
    if(savedList.some(s => s.id === item.id))return
    await addToList(item)
    loadList()
  }

  const loadList = async () => {
    const data = await getList(mediaType)
    setSavedList(data.map(item => ({
      id: item.id,
      media_id : item.media_id,
      title: item.title,
      coverImage: item.cover_image,
      type: item.media_type,
      status: item.status
    })))
  }

  useEffect(() => {
    loadList()
  },[mediaType])

  const handleStatusChange = async (id, newStatus) => {
    await updateStatus(id,newStatus)
    loadList()
  }

  const handleRemove = async (id) => {
    await removeFromList(id)
    loadList()
  }

  return(
    <div className="p-8 md:p-12 font-jakarta text-white max-w-7xl mx-auto">
      {/* Header & Tab Switcher */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
        <div>
          <h1 className="text-5xl font-sniglet tracking-wide">{title}</h1>
          <p className="text-slate-400 text-sm mt-1">Search and manage your {title.toLowerCase()} collection</p>
        </div>
        <div className="flex bg-slate-900 p-1.5 rounded-xl border border-slate-800 self-start md:self-auto">
        <button
          onClick={() => setActiveTab('search')} className={`px-5 py-2 rounded-lg text-sm font-bold transition-all ${activeTab === 'search' ? 'bg-teal text-black shadow-lg' : 'text-slate-400 hover:text-white'}`}>
          Search
        </button>
        <button onClick={() => setActiveTab('mylist')} className={`px-5 py-2 rounded-lg text-sm font-bold transition-all flex items-center gap-2 ${activeTab === 'mylist' ? 'bg-teal text-black shadow-lg' : 'text-slate-400 hover:text-white'}`}>
          My List
          <span className="bg-slate-800 text-teal text-xs px-2 py-0.5 rounded-full">
            {savedList.length}
          </span>
        </button>
      </div>
    </div>
    {/* SEARCH VIEW */}
    {activeTab === 'search' && (
      <div>
        <input
          type="text"
          placeholder={placeholder || `Search ${title}...`}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full py-3.5 px-4 text-sm rounded-xl border border-slate-700 bg-slate-900/80 text-white placeholder-slate-400 focus:outline-none focus:border-teal mb-8"
        />
        {loading && <p className="text-slate-400 mb-4">Searching {title}...</p>}

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {results.map((item) => (
            <SearchResultCard
              key={item.id}
              item={item}
              isSaved={savedList.some((s) => s.id === item.id)}
              onAdd={handleAddToList}
            />
          ))}
        </div>
      </div>
    )}
    {/* MY LIST VIEW */}
    {activeTab === 'mylist' && (
      <div>
        {savedList.length === 0 ? (
          <div className="text-center py-20 text-slate-400">
            <p className="text-lg">Your {title.toLowerCase()} list is empty.</p>
            <button onClick={() => setActiveTab('search')} className="mt-4 text-teal hover:underline">
              Search and add some items!
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {savedList.map((item) => (
              <SavedMediaCard
                key={item.id}
                item={item}
                onStatusChange={handleStatusChange}
                onRemove={handleRemove}
              />
            ))}
          </div>
        )}
      </div>
    )}
  </div>
  )
}

export default MediaPage
