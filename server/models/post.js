import mongoose from 'mongoose'
/*
This is the schema of the job post for the application using mongoose. 

*/

// creating Schema variable from the mongose.schema
const Schema = mongoose.Schema

/* The Job Post scema using the mongodb schema, 
the required field is required because it is important information
that a job post must have
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
//Exporting the schema as Post to be used by other component
module.exports = mongoose.model('Post', PostSchema);