import pool from '../config/dB.js'

export const addToList = async (req, res) => {
    const {media_id, media_type, title, cover_image, status} = req.body
    const user_id = req.user.id

    try{
        const result = await pool.query('INSERT INTO user_media (user_id, media_id, media_type, title, cover_image, status) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *', [user_id,media_id,media_type,title,cover_image,status || 'Plan to Watch'])
        res.status(201).json(result.rows[0])
    }
    catch(err){
        if(err.coode === '23505'){
            return res.status(400).json({message: 'Already in your list'})
        }
        res.status(500).json({message: err.message})
    }
}

export const getList = async (req, res) => {
    const user_id = req.user.id

    try{
        const result = await pool.query('SELECT * FROM user_media WHERE user_id = $1 ORDER BY created_at DESC', [user_id])
        res.status(200).json(result.rows)
    } catch(err){
        res.status(500).json({message : err.message})
    }
}

export const updateStatus = async (req, res) => {
    const {id} = req.params
    const {status} = req.body
    const user_id = req.user.id

    try{
        const result = await pool.query('UPDATE user_media SET status=$1  WHERE id = $2 AND user_id = $3 RETURNING *', [status, id, user_id])
        if(result.rows.length === 0){
            return res.status(404).json({message:'Item noot found'})
        }
        res.status(200).json(result.rows[0])
    } catch(err){
        res.status(500).json({message: err.message})
    }
}

export const removeFromList = async (req, res) => {
    const {id} = req.params
    const user_id = req.user.id

    try{
        await pool.query('DELETE FROM user_media WHERE id=$1 AND user_id=$2', [id, user_id])
        res.status(200).json({message: 'Removed from list'})
    }catch(err){
        res.status(500).json({message: err.message})
    }
}