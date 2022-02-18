const express = require("express");
const routes = express.Router();
const userController = require('../../controller/user/userController');

routes.get("/", (req, res) => {
  return res.json({ name: "MAIL-MICROSSERVICES" });
});

routes.use(userController);

module.exports = routes; 