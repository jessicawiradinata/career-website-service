/**
 * Specifies all routes for post
 * Validates inputs where necessary
 */
import express from 'express'
import { createPost, getPosts, getPost, updatePost, deletePost, searchLocation } from '../controllers/post'
import validation from '../../config/validations/post'
import validate from 'express-validation'

const router = express.Router()

router.route('/')

/**
 * GET api/posts
 * Gets all existing users
 */
.get(getPosts)
  .post(validate(validation.createPost), createPost)

/**
 * api/posts/:postId
 */
router.route('/:postId')
  // GET - Get a post with the specified post ID
  .get(validate(validation.getPost), getPost)
  // PUT - Updates a post with the specified post ID
  .put(validate(validation.updatePost), updatePost)
  // DELETE - Deletes a post with the specified ID
  .delete(validate(validation.deletePost), deletePost)

/**
 * GET api/posts/searchLocation/:searchText
 * Gets location suggestions based on the given search text
 */
router.route('/searchLocation/:searchText')
  .get(searchLocation)

export default router