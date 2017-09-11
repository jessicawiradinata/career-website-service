import express from 'express'
import postRoutes from './post'
import userRoutes from './user'

const router = express.Router()

//mount post routes at /posts
router.use('/posts', postRoutes)

router.use('/users', userRoutes)

export default router