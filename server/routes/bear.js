import express from 'express'
import { createBear, getBears, getBear, updateBear, deleteBear } from '../controllers/bear'

const router = express.Router()

router.route('/')

.get(getBears)

.post(createBear)

router.route('/:bearId')

.get(getBear)

.put(updateBear)

.delete(deleteBear)

export default router