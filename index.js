require("dotenv").config();
const express = require("express");
const { connect } = require("./controllers/index.js");
const router = require("./routes/index.js");
const app = express();

app.use(router);

connect();

const PORT = process.env.PORT || 3000;

app.listen(PORT, err => {
    if(err) {
        console.log(`Connection to server on port ${PORT} was unsuccessful.`)
    } else {
        console.log(`Connection to server on port ${PORT} was successful.`)
    }
});

module.exports = app;