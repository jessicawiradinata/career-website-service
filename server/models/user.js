import mongoose from 'mongoose'
import bcrypt from 'bcrypt'
/*
This is the schema of the job post for the application using mongoose. 

*/

// creating Schema variable from the mongose.schema
const Schema = mongoose.Schema

/* The Userscema using the mongodb schema, 
the required field is required because it is important information
that a user must have
*/
const UserSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  about: {
    type: String
  },
  isAdmin: {
    type: Boolean,
    required: true,
    default: false
  },
  createdAt: {
    type: Date,
    default: Date.now,
    required: true
  }
})

/*
This method is used to hash the user password through salted password hashing
using bcrypt library for security reason
*/
UserSchema.pre('save', function(next) {
  const user = this
  if (this.isModified('password')) {
    //generating the salt 
    bcrypt.genSalt(10, (err, salt) => {
      if (err) {
        return next(err)
      }
      //hashing the password using salt
      bcrypt.hash(user.password, salt, (err, hash) => {
        if (err) {
          return next(err)
        }
        //set the hashed password as the user password
        user.password = hash
        next()
      })
    })
  } else {
    return next()
  }
})

/*
This method is used to check the hashed password if thats is the correct one
*/
UserSchema.methods.validPassword = function(pw, cb) {
  //check the password using the compare method of bcrypt
  bcrypt.compare(pw, this.password, function(err, isValid) {
    if (err) {
      return cb(err)
    }
    cb(null, isValid)
  })
}

module.exports = mongoose.model('User', UserSchema);