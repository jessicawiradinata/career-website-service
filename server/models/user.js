/**
 * Model for User with its attributes and types
 */
import mongoose from 'mongoose'
import bcrypt from 'bcrypt'

const Schema = mongoose.Schema

/**
 * Specifies the attributes owned by a User, their types, and whether it is a compulsory attribute
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
 * Hashes the user's password before it is saved to the database
 */ 
UserSchema.pre('save', function(next) {
  const user = this
  if (this.isModified('password')) {
    bcrypt.genSalt(10, (err, salt) => {
      if (err) {
        return next(err)
      }
      bcrypt.hash(user.password, salt, (err, hash) => {
        if (err) {
          return next(err)
        }
        user.password = hash
        next()
      })
    })
  } else {
    return next()
  }
})

/**
 * Verifies if the given password is the user's password
 * @return true if given password is the user's password
 */
UserSchema.methods.validPassword = function(pw, cb) {
  bcrypt.compare(pw, this.password, function(err, isValid) {
    if (err) {
      return cb(err)
    }
    cb(null, isValid)
  })
}

module.exports = mongoose.model('User', UserSchema);