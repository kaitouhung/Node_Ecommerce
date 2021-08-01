const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, maxlength: 160 },
    description: { type: String },
    price: { type: Number, require: true },
    price_after_discount: { type: Number, default: 0 },
    rating: { type: Number, default: 0 },
    quantity: { type: Number, default: 0 },
    sold: { type: Number, default: 0 },
    view: { type: Number, default: 0 },
    image: { type: String, maxlength: 1000 },
    images: [{ type: String, maxlength: 1000 }],
    categoryId: { type: mongoose.Schema.Types.ObjectId, ref: 'Category' },
  },
  { timestamps: true }
);

const Product = mongoose.model('Product', ProductSchema, 'Product');

module.exports = {
  ProductSchema,
  Product,
};
