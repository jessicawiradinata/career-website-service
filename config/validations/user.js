import Joi from 'joi'

export default {

  createUser: {
    body: {
      email: Joi.string().email().required(),
      password: Joi.string().required(),
      name: Joi.string().alphanum(),
    }
  },

  getUser: {
    params: {
      userId: Joi.string().hex().required()
    }
  },

  updateUser: {
    body: {
      email: Joi.string().email().required(),
      password: Joi.string().required(),
      name: Joi.string().alphanum(),
    }
  },

  deleteUser: {
    params: {
      userId: Joi.string().hex().required()
    }
  }

}