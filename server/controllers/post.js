import Post from '../models/post'

/*
This module contains the method for Job Post that will be called when 
the API method related to post is used
*/
module.exports = {
  /* 
  This method is used to create a new post, will be called when 
  Post Job Post API method is called
  */
  createPost: (req, res) => {
    // creating the new post with the data from the message body
    const post = new Post({
      //getting the message body
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
    // saving the user into the database
    post.save((err) => {
      if (err) {
        res.send(err)
      }
      res.json({ message: 'Post created!' })
    })
  },
  /* 
  This method is used to get all the Job Posts in the application, 
  will be called when Get Job Post API method is called
  */
  getPosts: (req, res) => {
    Post.find({ }).exec((err, posts) => {
      if (err) {
        res.send(err)
      }
      res.json(posts)
    })
  },
  /* 
  This method is used to get all the post by particular user in the application, 
  specified with the userId in the parameter, 
  will be called when Get User Job Post API method is called
  */
  getUserPosts: (req, res) => {
    Post.find({ authorId: req.params.userId }).exec((err, posts) => {
      if (err) {
        res.send(err)
      }
      res.json(posts)
    })
  },
  /* 
  This method is used to get one particular post, 
  specified with the postId in the API method parameter, 
  will be called when Get Job Post API method is called
  */
  getPost: (req, res) => {
    Post.findById({ _id: req.params.postId }, (err, post) => {
      if (err) {
        res.send(err)
      }
      res.json(post)
    })
  },
  /* 
  This method is used to update one particular post,
  specified with the postId in the API method parameter, 
  will be called when Update Job Post API method is called
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
      // saving into the database
      post.save((err) => {
        if (err) {
          res.send(err)
        }
        res.json({ message: 'Post updated!' })
      })
    })
  },
  /* 
  This method is used to delete one particular post,
  specified with the postId in the API method parameter, 
  will be called when Detele Job Post API method is called
  */
  deletePost: (req, res) => {
    // finding the post that want to be deleted
    Post.remove({ _id: req.params.postId }, (err, post) => {
      if (err) {
        res.send(err)
      }
      res.json({ message: 'Successfully deleted' })
    })
  }

}