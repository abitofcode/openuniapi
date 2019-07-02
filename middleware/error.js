module.exports = function(err, req, res, next) {
  // error
  // warn
  // info
  // verbose
  // debug
  // silly
  res.status(500).send("Something failed.");
};
