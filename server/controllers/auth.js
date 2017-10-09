import User from '../models/user'
import jwt from 'jsonwebtoken'
import config from '../../config/jwt'

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
            const token = jwt.sign({ data: user }, config.auth.secret, { expiresIn: '2 days' })
            res.json({ message: 'Authentication successful.', id: user.id, token })
          }
          res.send({ message: 'Authentication failed. Invalid password.' })
        })
      }
    })
  }

}