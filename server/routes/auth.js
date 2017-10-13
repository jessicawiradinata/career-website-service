import express from 'express'
import { login, resetPassword, changePassword } from '../controllers/auth'
import validation from '../../config/validations/auth'
import validate from 'express-validation'

const router = express.Router()
// if api/auth/login
router.route('/login')
// use post method and call login method in the auth.js controller
.post(validate(validation.login), login)
// if api/auth/resetpassword
router.route('/resetpassword')
// use post method and call login method in the auth.js controller
.post(resetPassword)
// if api/auth/changepassword
router.route('/changepassword')
// use post method and call changePassword method in the auth.js controller
.post(changePassword)

export default router