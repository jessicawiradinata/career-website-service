/**
 * The main router of the application and used when the /api is used
 * route to the next router based on the path
 */
import express from 'express'
import postRoutes from './post'
import userRoutes from './user'
import authRoutes from './auth'

const router = express.Router()

// Use api/posts to route to postRoutes
router.use('/posts', postRoutes)

// Use api/users to route to userRoutes
router.use('/users', userRoutes)

// Use api/auth to route to authRoutes
router.use('/auth', authRoutes)

export default router