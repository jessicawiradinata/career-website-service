import express from 'express'
import { login } from '../controllers/auth'
import validation from '../../config/validations/auth'
import validate from 'express-validation'

const router = express.Router()
// if the api/auth/login
router.route('/login')
//using post method and calling the login method in the auth.js controller
.post(validate(validation.login), login)

export default router