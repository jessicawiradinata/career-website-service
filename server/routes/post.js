import express from 'express'
import { createPost, getPosts, getPost, updatePost, deletePost } from '../controllers/post'

const router = express.Router()

router.route('/')

.get(getPosts)

.post(createPost)

router.route('/:postId')

.get(getPost)

.put(updatePost)

.delete(deletePost)

export default router