/**
 * Async handler middleware to wrap async route handlers
 * and provide proper error handling without try/catch blocks
 */
const asyncHandler = fn => (req, res, next) => {
  return Promise
    .resolve(fn(req, res, next))
    .catch(err => {
      console.error('Async error caught:', err.message);
      
      // Log stack trace in development
      if (process.env.NODE_ENV === 'development') {
        console.error(err.stack);
      }
      
      next(err);
    });
};

module.exports = asyncHandler; 