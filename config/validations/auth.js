/**
 * This is the validation of the data on the server using joi.
 * It is done so that the data inserted into the db is in correct format.
 * 
 * This particular validation is for method body and parameter for all the Ath API method.
 */
import Joi from 'joi'

export default {
  /**
   * the validation of the login method body
   */
  login: {
    body: {
      //
      email: Joi.string().email().required(),
      password: Joi.string().required()
    }
  },
  /**
   * validaation for resetPassword method body
   */
  resetPassword:{
    body:{
      email: Joi.string().email().required(),
    }
  },
  /**
   * validation for changePassword method bodu
   */
  changePassword:{
    body:{
      email: Joi.string().email().required(),
      password: Joi.string().required()
    }
  }


}