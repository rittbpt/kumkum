const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors')
const app = express();

app.use(cors())
app.use(express.json());
require("./auth")(app)
require("./check")(app)
require("./item")(app)

mongoose.connect('mongodb+srv://admin:1234@kumkum.zj55gxj.mongodb.net/kumkum', {
    useNewUrlParser: true
});

app.listen(8080, () => {
    console.log(`listening on 8080`);
});

module.exports = app