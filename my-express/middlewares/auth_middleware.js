const authMiddleware = (req, res, next) => {
  const isAuthenticated = true;

  console.log("Users router middleware");

  if (isAuthenticated) {
    req.myUserId = "USER ID UIT TOKEN";
    next();
  }

  res.sendStatus(401);
};

module.exports = authMiddleware;
