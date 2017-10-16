/**
 * A collection of server methods to handle users
 */
import User from '../models/user'
import jwt from 'jsonwebtoken'

module.exports = {

  /**
   * Creates a new user
   * @property {string} req.body.email new user's email
   * @property {string} req.body.password new user's password
   * @property {string} req.body.name new user's name
   * @return {boolean} success - true if password create user is successful, false otherwise
   * @return {boolean} isExist - true if user with the specified email already exists
   */
  createUser: (req, res) => {
    const newUser = new User({
      email: req.body.email,
      password: req.body.password,
      name: req.body.name
    })
    User.findOne({ email: req.body.email }, (err, user) => {
      if (err) {
        res.send(err)
      }
      if (!user) {
        newUser.save((err) => {
          if (err) {
            res.send({ message: err, success: false, isExist: false })
          }
          res.json({ message: 'User created!', success: true, isExist: false })
        })
      } else {
        res.send({ message: 'User already exists', isExist: true })
      }
    })
  },

  /**
   * Gets all existing users
   * @return a colelction of all existing users
   */
  getUsers: (req, res) => {
    User.find({}, (err, users) => {
      if (err) {
        res.send(err)
      }
      res.json(users)
    })
  },

  /**
   * Gets a user with the specified user ID
   * @param userId ID of the user to find
   * @return user with the specified ID
   */
  getUser: (req, res) => {
    User.findById({ _id: req.params.userId }, (err, user) => {
      if (err) {
        res.send(err)
      }
      res.json(user)
    })
  },

  /**
   * Updates a user's name
   * @param userId ID of the user to be updated
   * @property {string} req.headers.token user's jwt token
   * @return {boolean} validToken - false if user's token is not valid, null otherwise
   * @return {boolean} success - true if user's name is successfully updated, false otherwise
   */
  updateUser: (req, res) => {
    User.findById({ _id: req.params.userId}, (err, user) => {
      if (err) {
        res.send(err)
      }

      user.name = req.body.name

      jwt.verify(req.headers.token, process.env.SECRET_KEY, (err, decode) => {
        if (err) {
          res.send({ message: err, validToken: false })
        } else {
          user.save((err) => {
            if (err) {
              res.send({ message: err, success: false })
            }
            res.json({ message: 'User name updated!', success: true })
          })
        }
      })
    })
  },
  
  /**
   * Deletes a user with the specified ID
   * @param userId ID of the user to be deleted
   * @return {boolean} success - true if delete user is sucessful, false otherwise
   */
  deleteUser: (req, res) => {
    User.remove({ _id: req.params.userId }, (err, user) => {
      if (err) {
        res.send({ message: err, success: false })
      }
      res.json({ message: 'Successfully deleted', success: true })
    })
  }

}