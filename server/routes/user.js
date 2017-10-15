/**
 * Specifies all routes for user
 * Validates inputs where necessary
 */
import express from 'express'
import { createUser, getUsers, getUser, updateUser, deleteUser } from '../controllers/user'
import validation from '../../config/validations/user'
import validate from 'express-validation'

const router = express.Router()

/**
 * api/users/
 */
router.route('/')
  // GET - Gets all existing users
  .get(getUsers)
  // POST - Creates a new user
  .post(validate(validation.createUser), createUser)

/**
 * api/users/:userId
 */
router.route('/:userId')
  // GET - Gets a user with the specified ID
  .get(validate(validation.getUser), getUser)
  // PUT - Updates a user's name with the specified ID
  .put(validate(validation.updateUser), updateUser)
  // DELETE - Deletes a user with the specified ID
  .delete(validate(validation.deleteUser), deleteUser)

export default router