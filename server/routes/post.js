import express from 'express'
import { createPost, getPosts, getUserPosts, getPost, updatePost, deletePost } from '../controllers/post'
import validation from '../../config/validations/post'
import validate from 'express-validation'

const router = express.Router()

router.route('/')

.get(getPosts)

.post(validate(validation.createPost), createPost)

router.route('/users/:userId')

.get(validate(validation.getUserPosts), getUserPosts)

router.route('/:postId')

.get(validate(validation.getPost), getPost)

.put(validate(validation.updatePost), updatePost)

.delete(validate(validation.deletePost), deletePost)

export default router