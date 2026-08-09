const BASE_URL = "http://localhost:5000/api"

const getToken = () => localStorage.getItem('token')

export const searchMedia = async (category, query) => {
    if(!query.trim()) return []

    try {
        const response = await fetch(`${BASE_URL}/media/${category}?query=${encodeURIComponent(query)}`)

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

export const addToList = async (item) => {
    const response = await fetch(`${BASE_URL}/list/add`, {
        method:"POST",
        headers:{
            'Content-Type' : 'application/json',
            'Authorization': `Bearer ${getToken()}`
        },
        body:JSON.stringify({
            media_id : item.id,
            media_type: item.type,
            title: item.title,
            cover_image : item.coverImage,
            status: 'Plan to Watch'

        })   
    })
    return await response.json()
}

export const getList = async (mediaType) => {
    const response = await fetch(`${BASE_URL}/list`, {
        headers: {
            'Content-Type' : 'application/json',
            'Authorization' : `Bearer ${getToken()}`
        }
    })
    const data = await response.json()
    return data.filter(item => item.media_type === mediaType)
}

export const updateStatus = async (id, status) => {
    const response = await fetch(`${BASE_URL}/list/${id}/status`, {
        method: 'PATCH',
        headers: {
            'Content-Type' : 'application/json',
            'Authorization': `Bearer ${getToken()}`
         },
         body: JSON.stringify({status}) 
}) 
    return await response.json()
}

export const removeFromList = async (id) => {
    const response = await fetch(`${BASE_URL}/list/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${getToken()}`
        }
    })
}