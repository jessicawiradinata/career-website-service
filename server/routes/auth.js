import express from 'express'
import { login } from '../controllers/auth'
import validation from '../../config/validations/auth'
import validate from 'express-validation'

const router = express.Router()

router.route('/login')

.post(validate(validation.login), login)

export default router