const loggerMiddleware = (req, res, next) => {
  console.log("Test logger");
  next();
};

module.exports = loggerMiddleware;
