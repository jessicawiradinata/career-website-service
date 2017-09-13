import User from '../models/user'
import bcrypt from 'bcrypt'

module.exports = {

  createUser: (req, res) => {
    const user = new User({
      email: req.body.email,
      password: req.body.password,
      name: req.body.name
    })
      
    user.save((err) => {
      if (err) {
        res.send(err)
      }
      res.json({ message: 'User created!' })
    })
  },

  getUsers: (req, res) => {
    User.find({}, (err, users) => {
      if (err) {
        res.send(err)
      }
      res.json(users)
    })
  },

  getUser: (req, res) => {
    User.findById({ _id: req.params.userId }, (err, user) => {
      if (err) {
        res.send(err)
      }
      res.json(user)
    })
  },

  updateUser: (req, res) => {
    User.findById({ _id: req.params.userId }, (err, user) => {
      if (err) {
        res.send(err)
      }

      user.email = req.body.email
      user.password = req.body.password
      user.name = req.body.name
      
      user.save((err) => {
        if (err) {
          res.send(err)
        }
        res.json({ message: 'User updated!' })
      })
    })
  },

  deleteUser: (req, res) => {
    User.remove({ _id: req.params.userId }, (err, user) => {
      if (err) {
        res.send(err)
      }
      res.json({ message: 'Successfully deleted' })
    })
  }

}