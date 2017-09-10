import Bear from '../models/bear'
import { ObjectID } from 'mongodb'

module.exports = {

  createBear: (req, res) => {
    const bear = new Bear({
      name: req.body.name
    })

    bear.save((err) => {
      if (err) {
        res.send(err)
      }
      res.json({ message: 'Bear created!' })
    })
  },

  getBears: (req, res) => {
    Bear.find({}).exec((err, bears) => {
      if (err) {
        res.send(err)
      }
      res.json(bears)
    })
  },

  getBear: (req, res) => {
    Bear.findById({ _id: req.params.bearId }, (err, bear) => {
      if (err) {
        res.send(err)
      }
      res.json(bear)
    })
  },

  updateBear: (req, res) => {
    Bear.findById({ _id: req.params.bearId }, (err, bear) => {
      if (err) {
        res.send(err)
      }

      bear.name = req.body.name

      bear.save((err) => {
        if (err) {
          res.send(err)
        }
        res.json({ message: 'Bear updated!' })
      })
    })
  },

  deleteBear: (req, res) => {
    Bear.remove({ _id: req.params.bear_id }, (err, bear) => {
      if (err) {
        res.send(err)
      }
      res.json({ message: 'Successfully deleted' })
    })
  }

}