/**
 * A collection of server methods for to handle posts
 */
import Post from '../models/post'
import request from 'request'
import jwt from 'jsonwebtoken'

module.exports = {

  /**
   * Creates a new post by a user
   * @property {string} req.headers.token user's jwt token
   * @property {string} req.body.title post title
   * @property {string} req.body.authorId author's user ID
   * @property {string} req.body.remuneration internship's pay rate
   * @property {string} req.body.location internship location
   * @property {string} req.body.workType work contract type
   * @property {string} req.body.closingDate internship application closing date
   * @property {string[]} req.body.skills skills required for the internship
   * @property {string} req.body.howToApply how to apply to the job post
   * @return {boolean} validToken - false if user's token is not valid, null otherwise
   * @return {boolean} success - true if user's post is successfully created, false otherwise
   */
  createPost: (req, res) => {
    const post = new Post({
      title: req.body.title,
      authorId: req.body.authorId,
      remuneration: req.body.remuneration,
      location: req.body.location,
      workType: req.body.workType,
      closingDate: req.body.closingDate,
      description: req.body.description,
      skills: req.body.skills,
      howToApply: req.body.howToApply
    })
    jwt.verify(req.headers.token, process.env.SECRET_KEY, (err, decode) => {
      if (err) {
        res.send({ message: err, validToken: false })
      } else {
        post.save((err) => {
          if (err) {
            res.send({ message: err, success: false })
          }
          res.json({ message: 'Post created!', success: true })
        })
      }
    })
  },

  /**
   * Gets all existing posts
   * @return a collection of all existing posts
   */
  getPosts: (req, res) => {
    Post.find({ }).exec((err, posts) => {
      if (err) {
        res.send(err)
      }
      res.json(posts)
    })
  },

  /**
   * Gets a post with the specified ID
   * @param postId ID of the post
   * @return post with the specified ID
   */
  getPost: (req, res) => {
    Post.findById({ _id: req.params.postId }, (err, post) => {
      if (err) {
        res.send(err)
      }
      res.json(post)
    })
  },

  /**
   * Updates a user's post
   * @param postId ID of the post to be updated
   * @property {string} req.headers.token user's jwt token
   * @property {string} req.body.title post title
   * @property {string} req.body.remuneration internship's pay rate
   * @property {string} req.body.location internship location
   * @property {string} req.body.workType work contract type
   * @property {string} req.body.closingDate internship application closing date
   * @property {string[]} req.body.skills skills required for the internship
   * @property {string} req.body.howToApply how to apply to the job post
   * @return {boolean} validToken - false if user's token is not valid, null otherwise
   * @return {boolean} success - true if user's post is successfully updated, false otherwise
   */
  updatePost: (req, res) => {
    Post.findById({ _id: req.params.postId }, (err, post) => {
      if (err) {
        res.send(err)
      }

      post.title = req.body.title,
      post.remuneration = req.body.remuneration,
      post.location = req.body.location,
      post.workType = req.body.workType,
      post.closingDate = req.body.closingDate,
      post.description = req.body.description,
      post.skills = req.body.skills,
      post.howToApply = req.body.howToApply

      jwt.verify(req.headers.token, process.env.SECRET_KEY, (err, decode) => {
        if (err) {
          res.send({ message: err, validToken: false })
        } else {
          post.save((err) => {
            if (err) {
              res.send({ message: err, success: false })
            }
            res.json({ message: 'Post updated!', success: true })
          })
        }
      })
    })
  },

  /**
   * Deletes a user's post
   * @param postId ID of the post to be deleted
   * @property {string} req.headers.token user's jwt token
   * @return {boolean} validToken - false if user's token is not valid, null otherwise
   * @return {boolean} success - true if user's post is successfully deleted, false otherwise
   */
  deletePost: (req, res) => {
    jwt.verify(req.headers.token, process.env.SECRET_KEY, (err, decode) => {
      if (err) {
        res.send({ message: err, validToken: false })
      } else {
        Post.remove({ _id: req.params.postId }, (err, post) => {
          if (err) {
            res.send({ message: err, success: false })
          }
          res.json({ message: 'Successfully deleted', success: true })
        })
      }
    })
  },

  /**
   * Requests search location suggestions from the Google Maps Places Autocomplete public service
   * @param searchText text to be searched
   * @return a collection of location suggestions
   */
  searchLocation: (req, res) => {
    const searchText = req.params.searchText
    const api = 'https://maps.googleapis.com/maps/api/place/autocomplete/json?'
    const apiKey = process.env.GOOGLE_PLACES_API_KEY
    request.get(`${api}input=${searchText}&types=geocode&key=${apiKey}`, (err, response, body) => {
      if (err) {
        res.send(err)
      }
      res.json(JSON.parse(body))
    })
  }
}