function errorHandler(err, req, res, next) {
  const success = "false";
  const status = err.statusCode || 500;
  const message = err.message || "Internal server error";
  return res.status(status).json({ success, message });
}
module.exports = {
  errorHandler,
};
