const controllers = require("../controllers/index.js");
const router = require("express").Router();

const { welcome, withdraw } = controllers;

router.get("/", welcome);
router.get("/withdraw", withdraw);

module.exports = router;