/**
 * Entry point of the server app
 * Configures the server
 */
import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import IndexRouter from './server/routes/index'
import cors from 'cors'
import dotenv from 'dotenv'

// Loads all sensitive information from environment variables file
dotenv.config()

const app = express()

// Restricts the allowed addresses which can access this server
const corsOptions = {
  origin: ['http://localhost:3000', 'http://ec2-18-220-149-76.us-east-2.compute.amazonaws.com:3000']
}
app.use(cors(corsOptions))

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

const port = process.env.PORT || 8080
const router = express.Router()

mongoose.connect(process.env.MONGO_URI, (err) => {
  router.use((req, res, next) => {
    console.log('Something is happening.')
    next()
  })

  app.use('/api', IndexRouter)
  app.listen(port)
  console.log(`Magic happens on port ${port} `)
})