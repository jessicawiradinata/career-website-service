import express from 'express'
import bearRoutes from './bear'
import postRoutes from './post'

const router = express.Router()

//mount bear routes at /bears
router.use('/bears', bearRoutes)

//mount post routes at /posts
router.use('/posts', postRoutes)

export default router