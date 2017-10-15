/**
 * Validates inputs for authentication server methods
 */
import Joi from 'joi'

export default {
  login: {
    body: {
      email: Joi.string().email().required(),
      password: Joi.string().required()
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
      password: Joi.string().required()
    }
  }
}