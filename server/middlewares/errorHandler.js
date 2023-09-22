// Not Found Middleware
const notFound = (req, res, next) => {
  const error = new Error(`Not Found: ${req.originalUrl}`);
  res.status(404);
  next(error);
};

// Error Handler Middleware
const errorHandler = (err, req, res, next) => {
  const statusCode = res.status === 200 ? 500 : res.statusCode;
  res.status(statusCode);
  res.json({
    message: err.message,
    stack: process.env.NODE_ENV === "production" ? "Production" : err.stack,
  });
};

module.exports = { notFound, errorHandler };
