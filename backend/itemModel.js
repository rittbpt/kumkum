const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ItemSchema = new Schema({
  item_id: Number,
  tag: String,
  order_name: String,
  process: String,
  detail: String,
  start: String,
  duedate: String,
  active: String
});

module.exports = mongoose.model("Item", ItemSchema)
