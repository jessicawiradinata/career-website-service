import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import IndexRouter from './server/routes/index'
import cors from 'cors'

const app = express()

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(cors())
// specifying the port
const port = process.env.PORT || 8080 

const router = express.Router()
// connect to the mongo database
mongoose.connect('mongodb://jessicawiradinata:careerwebsite2017@ds051883.mlab.com:51883/careerwebsite?authMechanism=SCRAM-SHA-1', (err) => {
  
  // middleware to use for all requests
  router.use((req, res, next) => {
    console.log('Something is happening.')
    next() // make sure we go to the next routes and don't stop here
  })
  // specifying using /api for the api using the IndexRouter from
  // index file from the index.js inside router folder in the project
  app.use('/api', IndexRouter)

  app.listen(port)
  console.log(`Magic happens on port ${port} `)
})