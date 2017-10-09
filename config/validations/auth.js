import Joi from 'joi'

/*
This is the validation of the data on the server using joi
it is done so that the data inserted into the db is in correct format
This particular validation is for the authentication which is login method
it is to make sure that the email and password is in correct format
*/
export default {

  login: {
    body: {
      //the validation of the email and password format
      email: Joi.string().email().required(),
      password: Joi.string().required()
    }
  }

}