import mongoose from 'mongoose'
import bcrypt from 'bcrypt'

const Schema = mongoose.Schema

const UserSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true,
    select: false
  },
  name: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    required: true
  }
})

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
  }
})

UserSchema.methods.validPassword = function(pw, cb) {
  bcrypt.compare(pw, this.password, (err, isValid) => {
    if (err) {
      return cb(err)
    }
    cb(null, isValid)
  })
}

module.exports = mongoose.model('User', UserSchema);