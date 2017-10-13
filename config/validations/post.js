import Joi from 'joi'

/*
This is the validation of the data on the server using joi.
It is done so that the data inserted into the db is in correct format.

This particular validation is for method body and parameter for all
the API method related to the job post.
*/
export default {

  createPost: {
    body: {
      // validation for the createPost method body
      title: Joi.string().required(),
      authorId: Joi.string().hex().required(),
      remuneration: Joi.string().allow(''),
      location: Joi.string().allow(''),
      workType: Joi.string().allow(''),
      closingDate: Joi.date().required(),
      description: Joi.string().allow(''),
      skills: Joi.string().allow(''),
      howToApply: Joi.string().allow(''),
      createdAt: Joi.date().required()
    }
  },

  getUserPosts: {
    params: {
      //validation for the userId param for the getUserPosts method
      userId: Joi.string().hex().required()
    }
  },

  getPost: {
    params: {
      //validation for the postId param for the getPost method
      postId: Joi.string().hex().required()
    }
  },

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
      skills: Joi.string().allow(''),
      howToApply: Joi.string().allow(''),
      createdAt: Joi.date().required()
    }
  },

  deletePost: {
    params: {
      //validation for the postId param for the deletePost method
      postId: Joi.string().hex().required()
    }
  }

}