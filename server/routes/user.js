import express from 'express'
// importing the method from the user controller
import { createUser, getUsers, getUser, updateUser, deleteUser } from '../controllers/user'
import validation from '../../config/validations/user'
import validate from 'express-validation'

const router = express.Router()
// if /api/users/
router.route('/')
// Using the GET method to get the user by calling getUsers 
.get(getUsers)
// Using the POST method to create new user by calling createUser method
.post(validate(validation.createUser), createUser)

// if/api/users/:userId
router.route('/:userId')
// Using the GET method to get the user specified by userId by calling the getUser method
.get(validate(validation.getUser), getUser)
// Using the PUT method to update the user specified by userId by calling the updateUser method
.put(validate(validation.updateUser), updateUser)
// Using the DELETE method to get the delete specified by userId by calling the deletePost method
.delete(validate(validation.deleteUser), deleteUser)

export default router