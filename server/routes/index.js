/**
 * The main router of the application and used when the /api is used
 * route to the next router based on the path
 */
import express from 'express'
import postRoutes from './post'
import userRoutes from './user'
import authRoutes from './auth'

// use the express router
const router = express.Router()

// if api/posts, route to postRoutes (router/post.js)
router.use('/posts', postRoutes)

// if api/users, route to userRoutes (router/user.js)
router.use('/users', userRoutes)

// if api/auth, route to authRoutes (router/auth.js)
router.use('/auth', authRoutes)

export default router