var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var PostSchema = new Schema({
  title: String,
  description: String,
  age: Number
});

var Post = mongoose.model("Post", PostSchema);
module.exports = Post;
