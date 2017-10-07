import express from 'express'
// importing the method from the post controller
import { createPost, getPosts, getUserPosts, getPost, updatePost, deletePost } from '../controllers/post'
import validation from '../../config/validations/post'
import validate from 'express-validation'

const router = express.Router()
// if /api/posts/
router.route('/')
// Using the GET method to get the all the posts by calling getPosts 
.get(getPosts)
// Using the POST method to create new post by calling createPost method
.post(validate(validation.createPost), createPost)

// if api/posts/users/:userId
router.route('/users/:userId')
// Using the GET method to get the posts for particular user by calling getUserPosts method
.get(validate(validation.getUserPosts), getUserPosts)

// if/api/posts/:postId
router.route('/:postId')
// Using the GET method to get the post specified by postId by calling the getPost method
.get(validate(validation.getPost), getPost)
// Using the PUT method to update the post specified by postId by calling the updatePost method
.put(validate(validation.updatePost), updatePost)
// Using the DELETE method to delete the post specified by postId by calling the deletePost method
.delete(validate(validation.deletePost), deletePost)

export default router