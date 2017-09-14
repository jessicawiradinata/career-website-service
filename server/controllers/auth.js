import User from '../models/user'
import jwt from 'jsonwebtoken'
import config from '../../config/jwt'

module.exports = {

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
          console.log(user)
          if (isValid && !err) {
            const token = jwt.sign({ data: user }, config.auth.secret, { expiresIn: '2 days' })
            res.json({ message: 'Authentication successful.', id: user.id, token })
          }
          res.send({ message: 'Authentication failed. Invalid password.' })
        })
      }
    })
  }

}