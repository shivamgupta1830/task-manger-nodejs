const notFound = (req, res) =>
  res.status(404).send("<h2>404: Route does not exist.</h2>");

module.exports = notFound;
