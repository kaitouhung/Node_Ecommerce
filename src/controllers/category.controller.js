import { errorServer, successData } from '*/config/response';
const { Category } = require('*/models/Category');
// const { Product } = require('../models/Product')

export const getCategories = async (req, res, next) => {
  try {
    //$ne: not equal
    const { exclude } = req.query;
    let condition = exclude ? { _id: { $ne: exclude } } : {};
    const categories = await Category.find(condition).sort({ creatAt: -1 });
    return successData(res, categories);
  } catch (error) {
    return errorServer(res, error);
  }
};

export const getCategoryById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const category = await Category.findById(id);
    if (!category) throw new Error('Id is invalid');
    return successData(res, category);
  } catch (error) {
    return errorServer(res, error.message);
  }
};

// mẹo dùng toObject hay toJSon để filter dữ liệu đầu ra trong mongoose

export const createCategory = async (req, res, next) => {
  try {
    const { categoryName } = req.body;
    const newCategory = await new Category({ categoryName }).save();
    return successData(res, newCategory);
  } catch (error) {
    return errorServer(res, error);
  }
};

export const updatePutCategory = async (req, res, next) => {
  try {
    const { id } = req.params;
    const category = await Category.findById(id);
    if (!category) throw new Error('Id is invalid');
    const keys = ['categoryName'];
    keys.forEach((key) => (category[key] = req.body[key]));
    await category.save();
    return successData(res, category);
  } catch (error) {
    return errorServer(res, error.message);
  }
};

export const updatePatchCategory = async (req, res, next) => {
  try {
    const { id } = req.params;
    const category = await Category.findById(id);
    if (!category) throw new Error('Id is invalid');
    Object.keys(req.body).forEach((key) => (category[key] = req.body[key]));
    await category.save();
    return successData(res, category);
  } catch (error) {
    return errorServer(res, error.message);
  }
};

//findByIdAndDelete, .exec() .clean()
export const deleteCategory = async (req, res, next) => {
  try {
    const { id } = req.params;
    console.log(id);
    const category = await Category.findByIdAndDelete(id);
    if (!category) throw new Error('Id is invalid');
    return successData(res, category);
  } catch (error) {
    return errorServer(res, error.message);
  }
};
