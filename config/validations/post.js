/**
 * Validates inputs for post server methods
 */
import Joi from 'joi'

export default {
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

  getPost: {
    params: {
      postId: Joi.string().hex().required()
    }
  },

  updatePost: {
    params: {
      postId: Joi.string().hex().required()
    },

    body: {
      title: Joi.string().required(),
      remuneration: Joi.string().allow(''),
      location: Joi.string().allow(''),
      workType: Joi.string().allow(''),
      closingDate: Joi.date().required(),
      description: Joi.string().allow(''),
      howToApply: Joi.string().allow('')
    }
  },

  deletePost: {
    params: {
      postId: Joi.string().hex().required()
    }
  }

}