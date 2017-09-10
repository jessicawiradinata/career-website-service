var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var PostSchema   = new Schema({
  title: String,
  author: { type: String, default: 'Admin' },
  description: String,
  date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Post', PostSchema);