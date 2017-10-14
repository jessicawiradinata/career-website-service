/**
 * the schema of the job post for the application using mongoose.
 */
import mongoose from 'mongoose'

// create Schema variable from the mongose.schema
const Schema = mongoose.Schema

/**
 * The Job Post scema using the mongodb schema, 
 * required field indicates importance of the attribute
 */
const PostSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  authorId: {
    type: String,
    required: true,
  },
  remuneration: {
    type: String,
  },
  location: {
    type: String,
  },
  workType: {
    type: String,
  },
  closingDate: {
    type: Date,
    required: true
  },
  description: {
    type: String
  },
  skills: {
    type: [String]
  },
  howToApply: {
    type: String
  },
  createdAt: {
    type: Date,
    required: true,
    default: Date.now
  }
});
//Export the schema as Post to be used by other component
module.exports = mongoose.model('Post', PostSchema);