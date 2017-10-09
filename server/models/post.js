import mongoose from 'mongoose'

const Schema = mongoose.Schema

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
  },
  isLocked: {
    type: Boolean,
    required: true,
    default: false,
  }
});

module.exports = mongoose.model('Post', PostSchema);