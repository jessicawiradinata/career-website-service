import User from '../models/user'

/*
This module contains the method for User that will be called when 
the API method related to user is used
*/
module.exports = {
  /* 
  This method is used to create a new user, will be called when 
  Post User API method is called
  */
  createUser: (req, res) => {
    // creating the new user with the data from the message body
    const user = new User({
      // getting the message body
      email: req.body.email,
      password: req.body.password,
      name: req.body.name
    })
    // saving the user into database
    user.save((err) => {
      if (err) {
        res.send(err)
      }
      res.json({ message: 'User created!' })
    })
  },
  /* 
  This method is used to get all the Users in the application, 
  will be called when Get Users API method is called
  */
  getUsers: (req, res) => {
    // getting all the users
    User.find({}, (err, users) => {
      if (err) {
        res.send(err)
      }
      res.json(users)
    })
  },
  /* 
  This method is used to get one particular user in the application, 
  specified with the userId in the parameter, 
  will be called when Get User API method is called
  */
  getUser: (req, res) => {
    // finding the user in the database using the userId
    User.findById({ _id: req.params.userId }, (err, user) => {
      if (err) {
        res.send(err)
      }
      res.json(user)
    })
  },
  /* 
  This method is used to update one particular user,
  specified with the userId in the API method parameter, 
  will be called when Update User API method is called
  */
  updateUser: (req, res) => {
    // finding the user in the database using the userId
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
  /*
  This method is used to delete one particular user in the application,
  specified with the userId in the API method parameter, 
  will be called when Detele User API method is called
  */
  deleteUser: (req, res) => {
    // finding the user and removing the user from the application
    User.remove({ _id: req.params.userId }, (err, user) => {
      if (err) {
        res.send(err)
      }
      res.json({ message: 'Successfully deleted' })
    })
  }

}