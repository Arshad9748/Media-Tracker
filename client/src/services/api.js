const BASE_URL = "http://localhost:5000/api/media"

export const searchMedia = async (category, query) => {
    if(!query.trim()) return []

    try {
        const response = await fetch(`${BASE_URL}/${category}?query=${encodeURIComponent(query)}`)

        if(!response.ok){
            throw new Error(`Error:${response.statusText}`)
        }
        return await response.json()
    }
    catch(error){
        console.error(`Failed to fetch ${category}`, error)
        return []
    }
}