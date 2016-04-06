var mongoose = require("mongoose");

var MessageSchema = new mongoose.Schema({
  "email": String,
  "content": String,
  "created": Date
});

exports.message = mongoose.model("Message", MessageSchema);