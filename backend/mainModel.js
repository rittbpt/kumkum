const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MainSchema = new Schema({
    lastid: Number,
    admin: Number,
    user: Number,
    key: String
});

module.exports = mongoose.model("Main", MainSchema)
