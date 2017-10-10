import User from '../models/user'
import jwt from 'jsonwebtoken'
import nodemailer from 'nodemailer'
import sgTransport from 'nodemailer-sendgrid-transport'
import randToken from 'rand-token'

/*
This module contains the method for login that will be called when 
the Post Login API is used
*/
module.exports = {

  login: (req, res) => {
    //getting the user from the email
    User.findOne({ email: req.body.email }, (err, user) => {
      if (err) {
        throw err
      }
      // no user, show error
      if (!user) {
        res.send({ message: 'Authentication failed. User not found.' })
      }
      else {
        // user found, check password if valid
        user.validPassword(req.body.password, (err, isValid) => {
          if (isValid && !err) {
            // both condition true, generate token and respond with token
            const token = jwt.sign({ data: user }, process.env.SECRET_KEY, { expiresIn: '2 days' })
            res.json({ message: 'Authentication successful.', id: user.id, token })
          }
          res.send({ message: 'Authentication failed. Invalid password.' })
        })
      }
    })
  },

  resetPassword: (req, res) => {
    User.findOne({ email: req.body.email }, (err, user) => {
      if (err) {
        res.send(err)
      }

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
            res.send(err)
          }
          res.json({ message: 'Password has been reset' })
        })
      })
    })
  }
}