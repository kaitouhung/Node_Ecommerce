const validator = require('validator');
const { User } = require('./../../../models/User');

const validatePostUser = async (req, res, next) => {
  let errors = {};

  const email = req.body.email ? req.body.email : '';
  const password = req.body.password ? req.body.password : '';
  const fullName = req.body.fullName ? req.body.fullName : '';
  const sdt = req.body.sdt ? req.body.sdt : '';
  // const userType = req.body.userType ? req.body.userType : "";

  if (validator.isEmpty(email)) {
    errors.email = 'Email is required';
  } else if (!validator.isEmail(email)) {
    errors.email = 'Email is invalid';
  } else {
    const user = await User.findOne({ email });
    if (user) errors.email = 'Email exists';
  }

  if (validator.isEmpty(password)) {
    error.password = 'Password is required';
  } else if (validator.isLength(password, { min: 6 })) {
    errors.password = 'Password must have at least 6 characters';
  }

  // validate password 2
  // if (validator.isEmpty(password2)) {
  //     errors.password2 = "Password2 is required"
  // } else if (!validator.equals(password, password2)) {
  //     errors.password2 = "Confirm password must match"
  // }

  if (validator.isEmpty(fullName)) {
    errors.fullName = 'FullName is required';
  }

  if (validator.isEmpty(sdt)) {
    errors.sdt = 'Phone Number is required';
  } else if (validator.isLength(sdt, { min: 11 })) {
    errors.sdt = 'Phone Number must have at least 11 character';
  } else {
    const vnf_regex = /((09|03|07|08|05)+([0-9]{8})\b)/g;
    if (vnf_regex.test(sdt) == false) {
      errors.sdt = 'Phone Numeber is invalid';
    }
  }

  if (Object.keys(errors).length === 0) return next();
  return res.status(404).json(errors);
};

module.exports = {
  validatePostUser,
};
