/**
 * the schema of the User for the application using mongoose.
 */
import mongoose from 'mongoose'
import bcrypt from 'bcrypt'

// create Schema variable from the mongose.schema
const Schema = mongoose.Schema

/**
 * The Userschema using the mongodb schema, 
 * required field indicates importance of the attribute
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

/**
 * hash the password through salted password hashing using bcrypt library for security
 */ 
UserSchema.pre('save', function(next) {
  const user = this
  if (this.isModified('password')) {
    //generate the salt
    bcrypt.genSalt(10, (err, salt) => {
      if (err) {
        return next(err)
      }
      //hash the password using salt
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

/**
 * check the hashed password if thats is the correct one
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
//Export the schema as User to be used by other component
module.exports = mongoose.model('User', UserSchema);