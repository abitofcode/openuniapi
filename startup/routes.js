const express = require("express");
const lookup = require("../routes/lookup");
const error = require("../middleware/error");

module.exports = function(app) {
  app.use(express.json());
  app.use("/api/lookup", lookup);
  app.use(error);
};
