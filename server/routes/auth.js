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
//use post method and call login method in the auth.js controller
.post(resetPassword)

router.route('/changepassword')

.post(changePassword)

export default router