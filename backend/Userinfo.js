const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  username: String,
  password: String,
  permisstion: String,
  first_name: String,
  last_name: String,
});

module.exports = mongoose.model("User", UserSchema)