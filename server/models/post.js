/**
 * Model for Post with its attributes and types
 */
import mongoose from 'mongoose'

const Schema = mongoose.Schema

/**
 * Specifies the attributes owned by a Post, their types, and whether it is a compulsory attribute
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

module.exports = mongoose.model('Post', PostSchema);