import User from '../models/user'

/**
 * collection of methods for User that will be called when 
 * the API method related to user is used
 */
module.exports = {
  /**
   * create a new user, will be called when Post User API method is called
   */
  createUser: (req, res) => {
    // create new user with the data from the message body
    const user = new User({
      // get the message body
      email: req.body.email,
      password: req.body.password,
      name: req.body.name
    })
    // save user into database
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
    // get all the users
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
    // find the user in the database using the userId
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
    // find the user in the database using the userId
    User.findById({ _id: req.params.userId }, (err, user) => {
      if (err) {
        res.send(err)
      }
      // get the all required value for the method body
      user.email = req.body.email
      user.password = req.body.password
      user.name = req.body.name
      // saving into the database
      user.save((err) => {
        if (err) {
          res.send(err)
        }
        res.json({ message: 'User updated!' })
      })
    })
  },

  /**
   * delete one user, specified with the userId in the API method parameter,
   * will be called when Detele User API method is called
   * @param userId id of the user to be deleted
   */
  deleteUser: (req, res) => {
    // find the user and removing the user from the application
    User.remove({ _id: req.params.userId }, (err, user) => {
      if (err) {
        res.send(err)
      }
      res.json({ message: 'Successfully deleted' })
    })
  }

}