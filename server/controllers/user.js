import User from '../models/user'
import jwt from 'jsonwebtoken'

/**
 * collection of methods for User that will be called when 
 * the API method related to user is used
 */
module.exports = {
  /**
   * create a new user, will be called when Post User API method is called
   */
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

  /**
   * get all the Users in the application, will be called when Get Users API method is called
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
   * get one user, specified with the userId in the parameter,
   * will be called when Get User API method is called
   * @param userId id of the user to find
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
   * update one user, specified with the userId in the API method parameter,
   * will be called when Update User API method is called
   * @param userId id of the user to be updated
   */
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

  /**
   * Updates a user's name
   * @param userId ID of the user to be updated
   * @property {string} req.headers.token user's jwt token
   * @return {boolean} validToken - false if user's token is not valid, null otherwise
   * @return {boolean} success - true if user's name is successfully updated, false otherwise
   */
  updateUserName: (req, res) => {
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
   * delete one user, specified with the userId in the API method parameter,
   * will be called when Detele User API method is called
   * @param userId id of the user to be deleted
   */
  deleteUser: (req, res) => {
    User.remove({ _id: req.params.userId }, (err, user) => {
      if (err) {
        res.send(err)
      }
      res.json({ message: 'Successfully deleted' })
    })
  }

}