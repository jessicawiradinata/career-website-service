/**
 * A collection of server methods to handle authentication
 */
import User from '../models/user'
import jwt from 'jsonwebtoken'
import nodemailer from 'nodemailer'
import sgTransport from 'nodemailer-sendgrid-transport'
import randToken from 'rand-token'

module.exports = {

  /**
   * Authenticates the user and provides an authentication token
   * @property {string} req.body.email user's email
   * @property {string} req.body.password user's password
   * @return {string} token - authentication token for the user, null if authentication failed
   */ 
  login: (req, res) => {
    User.findOne({ email: req.body.email }, (err, user) => {
      if (err) {
        throw err
      }
      if (!user) {
        res.send({ message: 'Authentication failed. User not found.' })
      }
      else {
        user.validPassword(req.body.password, (err, isValid) => {
          if (isValid && !err) {
            const token = jwt.sign({ data: user }, process.env.SECRET_KEY, { expiresIn: '2 days' })
            res.json({ message: 'Authentication successful.', id: user.id, token })
          }
          res.send({ message: 'Authentication failed. Invalid password.' })
        })
      }
    })
  },

  /**
   * Resets a user's password and sends the user a password reset email
   * @property {string} req.body.email user's email
   * @return {boolean} success - true if password reset is successful, false otherwise
   */ 
  resetPassword: (req, res) => {
    User.findOne({ email: req.body.email }, (err, user) => {
      if (err) {
        res.send({ message: err, success: false })
      }
      
      if (!user) {
        res.send ({ message: 'User not found', success: false })
      } else {
        const token = randToken.uid(8)
        user.password = token
        const options = {
          auth: {
            api_key: process.env.SENDGRID_API_KEY
          }
        }
  
        const smtpTransport = nodemailer.createTransport(sgTransport(options))
        const mailOptions = {
          to: user.email,
          from: 'noreply@career-website.com',
          subject: 'Career Website Password Reset',
          text: `Hi ${user.name},\n\n` +
            "You are receiving this email because you or someone else have requested to reset your account's password." +
            `Your new password is ${token}. Please login and change your password.\n\n` +
            'Regards,\n\nCareer Website Team'
        }
  
        smtpTransport.sendMail(mailOptions, (err) => {
          user.save((err) => {
            if (err) {
              res.send({ message: err, success: false })
            }
            res.json({ message: 'Password has been reset', success: true })
          })
        })
      }
      
    })
  },

  /**
   * Changes a user's password
   * @property {string} req.body.email user's email
   * @property {string} req.body.password user's password
   * @property {string} req.body.newPassword user's new password
   * @property {string} req.headers.token user's jwt token
   * @return {boolean} validtoken - false if user's token is not valid, null otherwise
   * @return {boolean} success - true if password is successfully changed, false otherwise
   */
  changePassword: (req, res) => {
    User.findOne({ email: req.body.email }, (err, user) => {
      if (err) {
        res.send(err)
      }
      if (!user) {
        res.send({ message: 'User not found' })
      } else {
        jwt.verify(req.headers.token, process.env.SECRET_KEY, (err, decoded) => {
          if (err) {
            res.send({ message: err, validToken: false })
          } else {
            user.validPassword(req.body.password, (err, isValid) => {
              if (isValid && !err) {
                user.password = req.body.newPassword
                user.save((err) => {
                  if (err) {
                    res.send(err)
                  }
                  res.json({ message: 'Password successfully changed!', success: true })
                })
              }
              else {
                res.json({ message: 'Invalid current password', success: false })
              }
            })
          }
          
        })
      }
    })
  }
}