import axios from 'axios'



let accessToken = null
let tokenExpiry = null

const getTwitchToken = async () => {
  // if token exists and not expired, reuse it
  if (accessToken && tokenExpiry > Date.now()) {
    return accessToken
  }
  
  // otherwise fetch a new one
  const response = await axios.post(
    `https://id.twitch.tv/oauth2/token?client_id=${process.env.TWITCH_CLIENT_ID}&client_secret=${process.env.TWITCH_CLIENT_SECRET}&grant_type=client_credentials`
  )
  
  accessToken = response.data.access_token
  // set expiry slightly before actual expiry to be safe
  tokenExpiry = Date.now() + (response.data.expires_in - 3600) * 1000
  
  return accessToken
}

// BFF- (Backend for Frontend)
// Template to ensure exact same structure for all media items
const createMediaItem = (id, type, title, coverImage) => ({
    id: `${type}_${id}`,
    type: type,
    title: title,
    coverImage: coverImage || 'https://via.placeholder.com/150',
    status: 'Plan to Watch',
    rating: 0
})



// For Anime (Kitsu API) Jikan failed gave too many errors(504,429)
export const searchAnime = async (req, res) => {
    try {
        const { query } = req.query
        if (!query) return res.json([])

        console.log(`[Backend] Searching Kitsu for: "${query}"`)

        const response = await axios.get(
            `https://kitsu.io/api/edge/anime?filter[text]=${encodeURIComponent(query)}&page[limit]=10`)

        if (!response.data?.data) return res.json([])

        const formattedData = response.data.data.map(item => 
            createMediaItem(item.id, 'anime', item.attributes.canonicalTitle, item.attributes.posterImage?.small || item.attributes.posterImage?.original)
        )

        console.log(`[Backend] Kitsu returned ${formattedData.length} items`)
        return res.json(formattedData) 

    } catch(err) {
        console.error("Kitsu API Error:", err.response?.data || err.message)
        return res.json([])
    }
}

// For Movies (TMDB API)
export const searchMovie = async (req, res) => {
    try{
        const {query} = req.query
        if (!query) return res.json([])
        const response = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.TMDB_API_KEY}&query=${encodeURIComponent(query)}`)


        const formattedData = response.data.results.map(item => createMediaItem(item.id, 'movie', item.title,item.poster_path ? `https://image.tmdb.org/t/p/w500${item.poster_path}` : 'https://placehold.co/500x750/png?text=No+Poster+Found'))
        return res.json(formattedData)
    }
    catch(err){
      return res.status(500).json({error:'Failed to fetch movie data'})
    }
}


export const searchTVShow = async (req,res) => {
        try{
        const {query} = req.query
        if (!query) return res.json([])
        const response = await axios.get(`https://api.themoviedb.org/3/search/tv?api_key=${process.env.TMDB_API_KEY}&query=${encodeURIComponent(query)}`)
        const formattedData = response.data.results.map(item => createMediaItem(item.id, 'tv',  item.name, item.poster_path ? `https://image.tmdb.org/t/p/w500${item.poster_path}` : 'https://placehold.co/500x750/png?text=No+Poster+Found'))
        return res.json(formattedData)
    }
    catch(err){
        return res.status(500).json({error:'Failed to fetch tvshow data'})
    }

}

// For Books (Open Library API)
export const searchBook = async (req, res) => {
    
    try{
        const {query} = req.query
        if (!query) return res.json([])
        const response = await axios.get(`https://openlibrary.org/search.json?q=${encodeURIComponent(query)}&limit=10`)
        const formattedData = response.data.docs.slice(0,10).map(item => createMediaItem(item.key? item.key.replace('/works/',''):item.cover_i, 'book', item.title, item.cover_i ? `https://covers.openlibrary.org/b/id/${item.cover_i}-L.jpg`: 'https://placehold.co/500x750/png?text=No+Poster+Found'))
        return res.json(formattedData)
    }
    catch(err){
        return res.status(500).json({error:'Failed to fetch book data'})
    }
}

// For Games (IGDB_TWITCH API)
export const searchGame = async (req, res) => {
  try {
    const { query } = req.query
    if (!query) return res.json([])

    const token = await getTwitchToken()

    const response = await axios.post(
      'https://api.igdb.com/v4/games',
      `search "${query}"; fields name,cover.url; limit 10;`,
      {
        headers: {
          'Client-ID': process.env.TWITCH_CLIENT_ID,
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'text/plain'
        }
      }
    )

    const formattedData = response.data
      .filter(item => item.cover)
      .map(item => createMediaItem(
        item.id,
        'game',
        item.name,
        item.cover?.url?.replace('t_thumb', 't_cover_big')
      ))

    return res.json(formattedData)

  } catch (err) {
    return res.status(500).json({ error: 'Failed to fetch game data' })
  }
}