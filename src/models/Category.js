const mongoose = require('mongoose');

const CategorySchema = new mongoose.Schema(
  {
    categoryName: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const Category = mongoose.model('Category', CategorySchema, 'Category');

module.exports = {
  CategorySchema,
  Category,
};
