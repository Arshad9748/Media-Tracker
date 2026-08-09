import express from 'express'
import { addToList, getList, updateStatus, removeFromList } from '../controllers/listControllers.js'
import protect from '../middleware/authMiddleware.js'

const router = express.Router()

router.use(protect)

router.post('/add', addToList)
router.get('/', getList)
router.patch('/:id/status', updateStatus)
router.delete('/:id', removeFromList)

export default router