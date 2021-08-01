const mongoose = require('mongoose');

const CloudinaryProductSchema = new mongoose.Schema(
  {
    productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
    image: {
      public_id: { type: String },
      secure_url: { type: String },
    },
    images: [
      {
        public_id: { type: String },
        secure_url: { type: String },
      },
    ],
  },
  {
    timestamps: true,
  }
);

const CloudinaryProduct = mongoose.model(
  'CloudinaryProduct',
  CloudinaryProductSchema,
  'CloudinaryProduct'
);

module.exports = {
  CloudinaryProductSchema,
  CloudinaryProduct,
};
