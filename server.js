import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import IndexRouter from './server/routes/index'

const app = express()

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

const port = process.env.PORT || 8080 

const router = express.Router()

mongoose.connect('mongodb://jessicawiradinata:careerwebsite2017@ds051883.mlab.com:51883/careerwebsite?authMechanism=SCRAM-SHA-1', (err) => {
  
  // middleware to use for all requests
  router.use((req, res, next) => {
    console.log('Something is happening.')
    next() // make sure we go to the next routes and don't stop here
  })

  app.use('/api', IndexRouter)

  app.listen(port)
  console.log(`Magic happens on port ${port} `)
})