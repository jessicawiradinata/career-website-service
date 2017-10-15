/**
 * Validates inputs for user server methods
 */
import Joi from 'joi'

export default {
  createUser: {
    body: {
      email: Joi.string().email().required(),
      password: Joi.string().required(),
      name: Joi.string().required(),
    }
  },

  getUser: {
    params: {
      userId: Joi.string().hex().required()
    }
  },

  updateUser: {
    body: {
      name: Joi.string().required(),
    }
  },

  deleteUser: {
    params: {
      userId: Joi.string().hex().required()
    }
  }

}