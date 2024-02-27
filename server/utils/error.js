export const errorHandler = (err, req, res, next) => {
  const error = new error();
  error.message = err.message;
  error.statusCode = err.statusCode;
  return error;
};
