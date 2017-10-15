/**
 * router for the users web service and used when /api/users is used
 * call method from the controllers based on the path
 * use joi validation to validate the method body
 */
import express from 'express'
// importing the method from the user controller
import { createUser, getUsers, getUser, updateUser, deleteUser, updateUserName } from '../controllers/user'
import validation from '../../config/validations/user'
import validate from 'express-validation'

const router = express.Router()
// if /api/users/
router.route('/')

// Use GET method to get the user by calling getUsers
.get(getUsers)

// Use POST method to create new user by calling createUser method
.post(validate(validation.createUser), createUser)

// if /api/users/:userId
router.route('/:userId')

// Use GET method to get the user specified by userId by calling the getUser method
.get(validate(validation.getUser), getUser)

// Use PUT method to update the user specified by userId by calling the updateUser method
.put(validate(validation.updateUser), updateUser)

// Use DELETE method to get the delete specified by userId by calling the deletePost method
.delete(validate(validation.deleteUser), deleteUser)

// if /api/users/changeName/:userId
router.route('/changeName/:userId')
// Use PUT method to update user's name specified by userId by calling the updateUserName method
.put(validate(validation.updateUserName), updateUserName)

export default router