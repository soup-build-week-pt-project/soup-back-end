const jwt = require("jsonwebtoken");

const jwtKey = process.env.JWT_SECRET;

module.exports = {
  authenticate,
  generateToken,
  requireAdmin
};
function authenticate(req, res, next) {
  const token = req.get("Authorization");

  if (token) {
    jwt.verify(token, jwtKey, (err, decoded) => {
      if (err) return res.status(401).json(err);

      req.decoded = decoded;

      next();
    });
  } else {
    return res.status(401).json({
      message: "No token provided, must be set on the Authorization Header"
    });
  }
}

function requireAdmin(req, res, next) {
  const token = req.get("Authorization");
  const decoded = jwt.verify(token, jwtKey, (err, decoded) => {
    if (err) return res.status(401).json(err);
    else return decoded;
  });
  if (!decoded.role) {
    res.status(401).json({
      message: "No role provided."
    });
  } else if (decoded.role == 1) {
    next();
  } else {
    res
      .status(401)
      .json({ message: "You do not have permissions for this page." });
  }
}

function generateToken(user) {
  const payload = {
    username: user.username,
    role: user.role_id
  };
  const options = {
    expiresIn: "1h",
    jwtid: "12345"
  };
  return jwt.sign(payload, jwtKey, options);
}
