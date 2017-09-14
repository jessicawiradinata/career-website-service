import express from 'express'
import { createUser, getUsers, getUser, updateUser, deleteUser } from '../controllers/user'
import validation from '../../config/validations/user'
import validate from 'express-validation'

const router = express.Router()

router.route('/')

.get(getUsers)

.post(validate(validation.createUser), createUser)

router.route('/:userId')

.get(validate(validation.getUser), getUser)

.put(validate(validation.updateUser), updateUser)

.delete(validate(validation.deleteUser), deleteUser)

export default router