const serverless = require("serverless-http");
const router = require("../routes/index.js");
const app = require("../index.js");

app.use("/.netlify/functions/index", router);

module.exports.handler = serverless(app);