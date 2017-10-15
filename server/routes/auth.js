/**
 * Specifies all routes for authentication
 * Validates inputs where necessary
 */
import express from 'express'
import { login, resetPassword, changePassword } from '../controllers/auth'
import validation from '../../config/validations/auth'
import validate from 'express-validation'

const router = express.Router()

/**
 * POST api/auth/login
 * Logs in the user
 */
router.route('/login')
  .post(validate(validation.login), login)


/**
 * POST api/auth/resetpassword
 * Resets the user's password
 */
router.route('/resetpassword')
  .post(validate(validation.resetPassword), resetPassword)

/**
 * POST api/auth/changepassword
 * Changes a user's password
 */
router.route('/changepassword')
  .post(validate(validation.changePassword), changePassword)

export default router