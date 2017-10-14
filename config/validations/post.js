/**
 * This is the validation of the data on the server using joi.
 * It is done so that the data inserted into the db is in correct format.
 * 
 * This particular validation is for method body and parameter for all Job Post API method.
 */
import Joi from 'joi'

export default {

  /**
   * validation for the createPost method body
   */
  createPost: {
    body: {
      title: Joi.string().required(),
      authorId: Joi.string().hex().required(),
      remuneration: Joi.string().allow(''),
      location: Joi.string().allow(''),
      workType: Joi.string().allow(''),
      closingDate: Joi.date().required(),
      description: Joi.string().allow(''),
      howToApply: Joi.string().allow('')
    }
  },

  /**
   * validation for the userId param for the getUserPosts method
   */
  getUserPosts: {
    params: {
      userId: Joi.string().hex().required()
    }
  },

  /**
   * validation for the postId param for the getPost method
   */
  getPost: {
    params: {
      postId: Joi.string().hex().required()
    }
  },

  /**
   * validation for the parameter and method body for the updatePost method
   */
  updatePost: {
    params: {
      //validation for the postId for the updatePost method
      postId: Joi.string().hex().required()
    },
    body: {
      // validation for the updatePost method body
      title: Joi.string().required(),
      remuneration: Joi.string().allow(''),
      location: Joi.string().allow(''),
      workType: Joi.string().allow(''),
      closingDate: Joi.date().required(),
      description: Joi.string().allow(''),
      howToApply: Joi.string().allow('')
    }
  },

  /**
   * validation for the postId param for the deletePost method
   */
  deletePost: {
    params: {
      postId: Joi.string().hex().required()
    }
  }

}