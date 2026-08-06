import express from 'express'
import {searchAnime,searchBook,searchGame,searchMovie,searchTVShow} from '../controllers/mediaController.js'


const router = express.Router()

router.get('/animes',searchAnime)
router.get('/books', searchBook)
router.post('/games', searchGame)
router.get('/movies', searchMovie)
router.get('/tv-shows', searchTVShow)

export default router

