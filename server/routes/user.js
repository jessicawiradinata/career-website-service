import express from 'express'
import { createUser, getUsers, getUser, updateUser, deleteUser } from '../controllers/user'

const router = express.Router()

router.route('/')

.get(getUsers)

.post(createUser)

router.route('/:userId')

.get(getUser)

.put(updateUser)

.delete(deleteUser)

export default router