/**
 * router for the posts web service and used when /api/posts is used
 * call method from the controllers based on the path
 * use joi validation to validate the method body
 */
import express from 'express'
import { createPost, getPosts, getUserPosts, getPost, updatePost, deletePost, searchLocation } from '../controllers/post'
import validation from '../../config/validations/post'
import validate from 'express-validation'

const router = express.Router()
// if /api/posts/
router.route('/')

// Use GET method to get the all the posts by calling getPosts
.get(getPosts)

// Use POST method to create new post by calling createPost method
.post(validate(validation.createPost), createPost)

// if api/posts/users/:userId
router.route('/users/:userId')

// Use GET method to get the posts for particular user by calling getUserPosts method
.get(validate(validation.getUserPosts), getUserPosts)

// if/api/posts/:postId
router.route('/:postId')

// Use GET method to get the post specified by postId by calling the getPost method
.get(validate(validation.getPost), getPost)

// Use PUT method to update the post specified by postId by calling the updatePost method
.put(validate(validation.updatePost), updatePost)

// Use DELETE method to delete the post specified by postId by calling the deletePost method
.delete(validate(validation.deletePost), deletePost)

// if/api/posts/searchLocation/:searchText
router.route('/searchLocation/:searchText')
// use get method to search the location by calling seachLocation method
.get(searchLocation)

export default router