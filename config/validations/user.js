/**
 * Validates inputs for user server methods
 */
import Joi from 'joi'

export default {
  createUser: {
    body: {
      email: Joi.string().email().required(),
      password: Joi.string().min(6).max(20).regex(/[a-zA-Z0-9]{6,30}/).required(),
      name: Joi.string().min(3).max(70).required(),
    }
  },

  getUser: {
    params: {
      userId: Joi.string().hex().required()
    }
  },

  updateUser: {
    body: {
      name: Joi.string().min(3).max(70).required(),
    }
  },

  deleteUser: {
    params: {
      userId: Joi.string().hex().required()
    }
  }

}