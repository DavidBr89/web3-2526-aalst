const adminMiddleware = (req, res, next) => {
  const isAdmin = true;

  if (isAdmin) {
    next();
  }
  res.sendStatus(403);
};

module.exports = adminMiddleware;
