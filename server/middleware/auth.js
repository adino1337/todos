const jwt = require("jsonwebtoken");

const config = process.env;

const verifyToken = (req, res, next) => {
  const token =
    req.body.token || req.query.token || req.header("authorization");
  if (!token) {
    return res.status(403).json({code:403,message:"A token is required for authentication"});
  }
  try {
    const decoded = jwt.verify(token, config.TOKEN_KEY);
    req.user = decoded;
  } catch (err) {
    return res.status(401).json({code:401,message:"Invalid Token"});
  }
  return next();
};

module.exports = verifyToken;