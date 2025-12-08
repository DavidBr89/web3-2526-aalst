const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {
  // Cookie uit uw request halen
  const cookies = req.cookies;

  if (!cookies) {
    return res.sendStatus(401);
  }

  const web3Token = cookies?.web3_token;

  if (!web3Token) {
    return res.sendStatus(401);
  }

  jwt.verify(web3Token, process.env.JWT_TOKEN_SECRET, (err, payload) => {
    if (err) {
      return res.sendStatus(401);
    }

    req.userId = payload.sub;
    next();
  });

  // console.log("Users router middleware");

  // if (isAuthenticated) {
  //   req.myUserId = "USER ID UIT TOKEN";
  //   next();
  // }

  // res.sendStatus(401);
};

module.exports = authMiddleware;
