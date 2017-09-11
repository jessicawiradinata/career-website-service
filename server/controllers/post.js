import Post from '../models/post'

module.exports = {

  createPost: (req, res) => {
    const post = new Post({
      title: req.body.title,
      description: req.body.description
    })

    post.save((err) => {
      if (err) {
        res.send(err)
      }
      res.json({ message: 'Post created!' })
    })
  },

  getPosts: (req, res) => {
    Post.find({}).exec((err, posts) => {
      if (err) {
        res.send(err)
      }
      res.json(posts)
    })
  },

  getPost: (req, res) => {
    Post.findById({ _id: req.params.postId }, (err, post) => {
      if (err) {
        res.send(err)
      }
      res.json(post)
    })
  },

  updatePost: (req, res) => {
    Post.findById({ _id: req.params.postId }, (err, post) => {
      if (err) {
        res.send(err)
      }

      post.title = req.body.title
      post.description = req.body.description

      post.save((err) => {
        if (err) {
          res.send(err)
        }
        res.json({ message: 'Post updated!' })
      })
    })
  },

  deletePost: (req, res) => {
    Post.remove({ _id: req.params.postId }, (err, post) => {
      if (err) {
        res.send(err)
      }
      res.json({ message: 'Successfully deleted' })
    })
  }

}