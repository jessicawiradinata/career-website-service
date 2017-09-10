import express from 'express'
import bearRoutes from './bear'

const router = express.Router()

//mount bear routes at /bears
router.use('/bears', bearRoutes)

export default router