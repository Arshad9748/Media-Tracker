import { useState, useEffect } from "react"
import { searchMedia } from "../services/api"


const Animes = () => {
  const [results, setResults] = useState([])
  const [loading, setLoading] = useState(false)
  const [query, setQuery] = useState('')

// Debouncing :) to let the user type before making a api call
  useEffect(() =>{
    if (!query.trim()){
      setResults([])
      return
    }
        const timer = setTimeout(async () => {
          setLoading(true)
          const data = await searchMedia('anime', query)
          console.log("Fetched Anime Data:", data)
          setResults(data)
          setLoading(false)
        },700)

        return() => clearTimeout(timer)
    }, [query])



  return (
    <div className="p-20 font-jakarta text-white ">
        <h1 className="text-6xl font-sniglet">Anime</h1>
        <input type="text" placeholder="Search for an anime (e.g. Naruto, Attack on Titan)..." value={query} onChange={(e) => setQuery(e.target.value)} className="w-full mt-6 p-6 text-lg rounded-xl border mb-12 text-black bg-white focus:outline-none"/>
    {/*lading ... Indicator */}
    {loading && <p>Searching....</p>}
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
      {results.map((item) => (
        <div key={item.id} className="border border-slate-700 rounded-xl overflow-hidden bg-slate-900 flex flex-col items-center hover:scale-105 transition-transform">
          <img src={item.coverImage} alt={item.title} className="w-full h-[320px] object-cover"/>
          <div className="p-4 w-full text-center">
            <h3 className="text-base font-bold mt-2 mb-1 ">{item.title}</h3>
          </div>
        </div>
      )

  )}
    </div>
    </div>
  )
}

export default Animes