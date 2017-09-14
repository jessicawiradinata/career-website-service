import Joi from 'joi'

export default {

  createPost: {
    body: {
      title: Joi.string().required(),
      authorId: Joi.string().hex().required(),
      description: Joi.string()
    }
  },

  getPosts: {
    params: {
      userId: Joi.string().hex().required()
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
      description: Joi.string()
    }
  },

  deletePost: {
    params: {
      postId: Joi.string().hex().required()
    }
  }

}