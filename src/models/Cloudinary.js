const mongoose = require('mongoose');

const CloudinarySchema = new mongoose.Schema(
  {
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    public_id: { type: String },
    secure_url: { type: String },
  },
  {
    timestamps: true,
  }
);

const Cloudinary = mongoose.model('Cloudinary', CloudinarySchema, 'Cloudinary');

module.exports = {
  CloudinarySchema,
  Cloudinary,
};
