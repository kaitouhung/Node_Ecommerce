const jwt = require('jsonwebtoken');
const { promisify } = require('util');

const jwtVerify = promisify(jwt.verify);

module.exports.authenticate = (req, res, next) => {
  const token = req.header('token');
  if (!token)
    return res.status(404).json({
      message: 'Token is required',
    });

  jwtVerify(token, 'itachi')
    .then((decoded) => {
      req.user = decoded;
      next();
    })
    .catch((err) => res.status(401).json({ message: 'Token invalid' }));
};

module.exports.authorize = (userTypeArray) => {
  return (req, res, next) => {
    const user = req.user;
    if (userTypeArray.indexOf(user.userType) === -1)
      return res.status(404).json({ message: "You don't have permission" });
    next();
  };
};
