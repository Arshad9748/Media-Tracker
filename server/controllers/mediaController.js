import axios from 'axios'

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



// For Anime (Jikan API)
export const searchAnime = async (query) => {
    try {
    const {query} = req.query 
    const res = await axios.get(`https://api.jikan.moe/v4/anime?q=${query}&limit=10`)
    const formattedData = res.data.data.map(item => createMediaItem(item.mal_id, 'anime', item.title, item.images.jpg.image_url))
   return res.json(formattedData) 
}
catch(err) {
    return res.status(500).json({error:'Failed to fetch anime data'})
}
}

// For Movies (TMDB API)