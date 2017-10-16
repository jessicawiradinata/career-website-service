/**
 * Validates inputs for authentication server methods
 */
import Joi from 'joi'

export default {
  login: {
    body: {
      email: Joi.string().email().required(),
      password: Joi.string().min(6).max(20).regex(/[a-zA-Z0-9]{6,30}/).required(),
    }
  },

  resetPassword:{
    body:{
      email: Joi.string().email().required(),
    }
  },

  changePassword:{
    body:{
      email: Joi.string().email().required(),
      password: Joi.string().min(6).max(20).regex(/[a-zA-Z0-9]{6,30}/).required(),
    }
  }
}