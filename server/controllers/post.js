import Post from '../models/post'
import request from 'request'

/**
 * Collection of methods for Job Post that will be called when 
 * the API method related to post is used
 */

module.exports = {
  /**
   * create a new post, will be called when Post Job Post API method is called
   */
  createPost: (req, res) => {
    // create the new post with the data from the message body
    const post = new Post({
      //get the message body
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
    // save the user into the database
    post.save((err) => {
      if (err) {
        res.send(err)
      }
      res.json({ message: 'Post created!' })
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