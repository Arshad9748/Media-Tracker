import express from 'express'
import {searchAnime,searchBook,searchGame,searchMovie,searchTVShow} from '../controllers/mediaController.js'


const router = express.Router()

router.get('/anime',searchAnime)
router.get('/book', searchBook)
router.get('/game', searchGame)
router.get('/movie', searchMovie)
router.get('/tv-show', searchTVShow)

export default router

