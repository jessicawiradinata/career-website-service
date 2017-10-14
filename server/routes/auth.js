/**
 * router for the auth web service and used when /api/auth is used
 * call method from the controllers based on the path
 * use joi validation to validate the method body
 */
import express from 'express'
import { login, resetPassword, changePassword } from '../controllers/auth'
import validation from '../../config/validations/auth'
import validate from 'express-validation'

const router = express.Router()
// if api/auth/login
router.route('/login')
//use post method and call login method in the auth.js controller
.post(validate(validation.login), login)


// if api/auth/resetpassword
router.route('/resetpassword')
//use post method and call resetpassword method in the auth.js controller
.post(validate(validation.resetPassword), resetPassword)

// if api/auth/changepassword
router.route('/changepassword')
//use post method and call changepassword method in the auth.js controller
.post(validate(validation.changePassword), changePassword)

export default router