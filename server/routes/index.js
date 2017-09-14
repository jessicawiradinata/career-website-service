import express from 'express'
import postRoutes from './post'
import userRoutes from './user'
import authRoutes from './auth'

const router = express.Router()

router.use('/posts', postRoutes)

router.use('/users', userRoutes)

router.use('/auth', authRoutes)

export default router