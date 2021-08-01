const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
import { ROLE } from './../constants/user';

const UserSchema = new mongoose.Schema(
  {
    email: { type: String, required: true, minlength: 5, maxlength: 160 },
    password: { type: String, required: true, minlength: 6, maxlength: 160 },
    fullName: { type: String, maxlength: 160 },
    phone: { type: String, maxlength: 20 },
    userType: { type: [String], require: true, default: [ROLE.USER] },
    address: { type: String, maxlength: 160 },
    avatar: { type: String },
    date_of_birth: { type: Date, maxlength: 160 },
  },
  { timestamps: true }
);

UserSchema.pre('save', function beforeSave(next) {
  const user = this;
  if (!user.isModified('password')) return next();
  bcrypt
    .genSalt(10)
    .then((salt) => bcrypt.hash(user.password, salt))
    .then((hash) => {
      user.password = hash;
      next();
    });
});

const User = mongoose.model('User', UserSchema, 'User');

module.exports = {
  UserSchema,
  User,
};
