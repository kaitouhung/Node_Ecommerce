const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { promisify } = require('util'); //thư viện promissify : chuyển bình thường sang Promise

const { Cloudinary } = require('*/models/Cloudinary');
const { User } = require('*/models/User');
import { successData, errorServer } from '*/config/response';
import { omitBy } from 'lodash';

export const getUsers = async (req, res, next) => {
  try {
    const users = await User.find().sort({ createAt: -1 });
    return successData(res, users);
  } catch (error) {
    return errorServer(res, error.message);
  }
};

export const getUserByUser = async (req, res, next) => {
  try {
    const id = req.header._id;
    const user = await User.findById(id).select({ password: 0, __v: 0 });
    if (!user) throw new Error('No User');
    return successData(res, user);
  } catch (error) {
    return errorServer(res, error.message);
  }
};

export const getUserByAdmin = async (req, res, next) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id).select({ password: 0, __v: 0 });
    if (!user) throw new Error('No User');
    return successData(res, user);
  } catch (error) {
    return errorServer(res, error.message);
  }
};

export const Register = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const emailTest = await User.findOne({ email });
    if (emailTest) throw new Error('Email is exsits');
    const newUser = await new User({ email, password }).save();
    return successData(res, newUser);
  } catch (error) {
    return errorServer(res, error.message);
  }
};

const omitByCustom = (obj) => {
  let newObj = {};
  for (let key in obj) {
    if (obj[key] !== '' && obj[key] !== undefined) {
      Object.assign(newObj, { [key]: obj[key] });
    }
  }
  return newObj;
};

const hashPassword = (password) => {
  return bcrypt
    .genSalt(10)
    .then((salt) => bcrypt.hash(password, salt))
    .then((hash) => hash);
};

export const updateUserByAdmin = async (req, res, next) => {
  try {
    const { id } = req.params;
    const {
      password,
      fullName,
      phone,
      address,
      date_of_birth,
      avatar,
      userType,
    } = req.body;
    let user = {
      password,
      fullName,
      phone,
      address,
      date_of_birth,
      avatar,
      userType,
    };
    user = omitByCustom(user);
    if (user.password) {
      Object.assign(user, { password: await hashPassword(password) });
    }
    console.log(user);
    const userDB = await User.findByIdAndUpdate(id, user, {
      new: true,
    }).select({ password: 0, __v: 0 });
    return successData(res, userDB);
  } catch (error) {
    return errorServer(res, error.message);
  }
};

export const updateUser = async (req, res, next) => {
  try {
    const {
      password,
      newPassword,
      fullName,
      phone,
      address,
      date_of_birth,
      avatar,
    } = req.body;
    const user = omitBy(
      {
        password,
        fullName,
        phone,
        address,
        date_of_birth,
        avatar,
      },
      (val) => val === undefined || val === ''
    );

    const userDB = await User.findById(req.user._id);
    if (user.password) {
      if (await bcrypt.compare(password, userDB.password)) {
        Object.assign(user, { password: await hashPassword(newPassword) });
      } else {
        throw new Error('Password không đúng');
      }
    }
    const newUser = await User.findByIdAndUpdate(req.user._id, user, {
      new: true,
    }).select({ password: 0, __v: 0 });
    return successData(res, newUser);
  } catch (error) {
    return errorServer(res, error.message);
  }
};

const jwtSign = promisify(jwt.sign);
export const Login = (req, res, next) => {
  const { email, password } = req.body;
  let _user;
  User.findOne({ email })
    .then((user) => {
      _user = user;
      if (!user)
        return Promise.reject({
          status: 404,
          message: 'Email not found',
        });
      return bcrypt.compare(password, user.password);
    })
    .then((isMatched) => {
      if (!isMatched)
        return Promise.reject({
          status: 404,
          message: 'Wrong password',
        });
      const payload = {
        _id: _user._id,
        email: _user.email,
        userType: _user.userType,
      };
      return jwtSign(payload, 'itachi', { expiresIn: 26000 });
    })
    .then((token) =>
      res.status(200).json({
        message: 'Login successfully',
        token,
      })
    )
    .catch((err) => {
      if (err.status === 404)
        return res.status(err.status).json({ message: err.message });
      return res.status(404).json(err);
    });
};

export const uploadAvatar = async (req, res) => {
  try {
    const { email } = req.user;
    const user = await User.findOne({ email });
    if (!user) throw new Error("Cant't find Email ");
    const { cloudinary } = req;
    user.avatar = cloudinary.secure_url;
    const newCloudinary = {
      userId: req.user._id,
      public_id: cloudinary.public_id,
      secure_url: cloudinary.secure_url,
    };
    const result = await Promise.all([
      user.save(),
      new Cloudinary(newCloudinary).save(),
    ]);
    return successData(res, result[0]);
  } catch (error) {
    return errorServer(res, error.message);
  }
};

export const deleteUser = async (req, res, next) => {
  try {
    const { id } = req.params;
    const userDB = await User.findByIdAndDelete(id);
    return successData(res, {
      message: 'Xóa người dùng thành công',
      data: userDB,
    });
  } catch (error) {
    return errorServer(res, error.message);
  }
};
