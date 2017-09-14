import express from 'express'
import { createPost, getPosts, getPost, updatePost, deletePost } from '../controllers/post'
import validation from '../../config/validations/post'
import validate from 'express-validation'

const router = express.Router()

router.route('/')

.post(validate(validation.createPost), createPost)

router.route('/users/:userId')

.get(validate(validation.getPosts), getPosts)

router.route('/:postId')

.get(validate(validation.getPost), getPost)

.put(validate(validation.updatePost), updatePost)

.delete(validate(validation.deletePost), deletePost)

export default router