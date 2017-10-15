import Post from '../models/post'
import request from 'request'
import jwt from 'jsonwebtoken'

/**
 * Collection of methods for Job Post that will be called when 
 * the API method related to post is used
 */

module.exports = {
  /**
   * Creates a new post by a user
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
   * get all the Job Posts in the application, will be called when Get Job Post API method is called
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
   * get all the post by particular user in the application, specified with the userId in the parameter,
   *  will be called when Get User Job Post API method is called
   * @param userId th eid of the user for the user posts
   */
  getUserPosts: (req, res) => {
    Post.find({ authorId: req.params.userId }).exec((err, posts) => {
      if (err) {
        res.send(err)
      }
      res.json(posts)
    })
  },

  /**
   * get one particular post, specified with the postId in the API method parameter,
   * will be called when Get Job Post API method is called
   * @param postId the id of the post
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
   * update one particular post, specified with the postId in the API method parameter,
   * will be called when Update Job Post API method is called
   * @param postId the id of the post to be updated
   */
  updatePost: (req, res) => {
    // finding the post that want to be updated
    Post.findById({ _id: req.params.postId }, (err, post) => {
      if (err) {
        res.send(err)
      }
      // get the all required value for the method body
      post.title = req.body.title,
      post.remuneration = req.body.remuneration,
      post.location = req.body.location,
      post.workType = req.body.workType,
      post.closingDate = req.body.closingDate,
      post.description = req.body.description,
      post.skills = req.body.skills,
      post.howToApply = req.body.howToApply
      // save into the database
      post.save((err) => {
        if (err) {
          res.send(err)
        }
        res.json({ message: 'Post updated!' })
      })
    })
  },

  /**
   * delete one particular post, specified with the postId in the API method parameter,
   * will be called when Detele Job Post API method is called
   * @param postId of the post to be deleted
   */
  deletePost: (req, res) => {
    // find the post that want to be deleted
    Post.remove({ _id: req.params.postId }, (err, post) => {
      if (err) {
        res.send(err)
      }
      res.json({ message: 'Successfully deleted' })
    })
  },

  /**
   * Requests search location suggestions from the Google Maps Places Autocomplete public service
   * @param searchText text to be searched
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