import Joi from 'joi'

/**
 * This is the validation of the data on the server using joi.
 * It is done so that the data inserted into the db is in correct format.
 * 
 * This particular validation is for method body and parameter for all the User API method.
 */

export default {
  /**
   * validation for the createUser method body
   */
  createUser: {
    body: {
      email: Joi.string().email().required(),
      password: Joi.string().required(),
      name: Joi.string().required(),
    }
  },

  /**
   * validation for the userId param for the getUser method
   */
  getUser: {
    params: {
      userId: Joi.string().hex().required()
    }
  },

  /**
   * validation for the UpdateUser method body
   */
  updateUser: {
    body: {
      email: Joi.string().email().required(),
      password: Joi.string().required(),
      name: Joi.string().alphanum(),
    }
  },

  /**
   * validation for the userId param for the deleteUser method
   */
  updateUserName: {
    body: {
      //validation for the updateUserName method body
      name: Joi.string().alphanum(),
    }
  },

  deleteUser: {
    params: {
      userId: Joi.string().hex().required()
    }
  }

}