import Joi from 'joi'

/*
This is the validation of the data on the server using joi.
It is done so that the data inserted into the db is in correct format.

This particular validation is for method body and parameter for all
the API method related to the user.
*/
export default {

  createUser: {
    body: {
      // validation for the createUser method body
      email: Joi.string().email().required(),
      password: Joi.string().required(),
      name: Joi.string().required(),
    }
  },

  getUser: {
    params: {
      //validation for the userId param for the getUser method
      userId: Joi.string().hex().required()
    }
  },

  updateUser: {
    body: {
      // validation for the UpdateUser method body
      email: Joi.string().email().required(),
      password: Joi.string().required(),
      name: Joi.string().alphanum(),
    }
  },

  deleteUser: {
    params: {
      //validation for the userId param for the deleteUser method
      userId: Joi.string().hex().required()
    }
  }

}