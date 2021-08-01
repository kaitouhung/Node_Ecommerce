const { Product } = require('*/models/Product');
const { Category } = require('*/models/Category');
const { CloudinaryProduct } = require('*/models/CloudinaryProduct');
import mongoose from 'mongoose';

import { SORT_BY, ORDER } from '*/constants/product';
import { successData, errorServer } from '*/config/response';

const omitByCustom = (obj) => {
  let newObj = {};
  for (let key in obj) {
    if (obj[key] !== '' && obj[key] !== undefined) {
      Object.assign(newObj, { [key]: obj[key] });
    }
  }
  return newObj;
};

export const getProducts = async (req, res, next) => {
  try {
    let {
      page = 1,
      limit = 30,
      category,
      sort_by,
      order,
      rating_filter,
      price_max,
      price_min,
      name,
    } = req.query;

    page = Number(page);
    limit = Number(limit);
    let condition = {};
    if (category) {
      condition.categoryId = category;
    }
    if (rating_filter) {
      condition.rating = { $gte: rating_filter };
    }
    if (price_max) {
      condition.price = {
        $lte: price_max,
      };
    }
    if (price_min) {
      condition.price = condition.price
        ? { ...condition.price, $gte: price_min }
        : { $gte: price_min };
    }
    if (!ORDER.includes(order)) {
      order = ORDER[0];
    }
    if (!SORT_BY.includes(sort_by)) {
      sort_by = SORT_BY[0];
    }
    if (name) {
      condition.name = {
        $regex: name,
        $option: 'i',
      };
    }
    let [products, totalProducts] = await Promise.all([
      Product.find(condition)
        .populate({ path: 'categoryId' })
        .sort({ [sort_by]: order === 'desc' ? -1 : 1 })
        .skip(page * limit - limit)
        .limit(limit)
        .select({ __v: 0, description: 0 }),
      Product.find(condition).countDocuments(),
    ]);
    const page_size = Math.ceil(totalProducts / limit) || 1;
    return successData(res, {
      products,
      pagination: {
        page,
        limit,
        page_size,
      },
    });
  } catch (error) {
    return errorServer(res, error.message);
  }
};

// $inc: tăng giá trị theo field
export const getProduct = async (req, res, next) => {
  try {
    const { id } = req.params;
    const product = await Product.findByIdAndUpdate(
      id,
      { $inc: { view: 1 } },
      { new: true }
    ).populate('categoryId');
    return successData(res, product);
  } catch (error) {
    return errorServer(res, error.message);
  }
};

// Admin lấy products theo category
export const getAllProducts = async (req, res, next) => {
  let { category } = req.query;
  let condition = {};
  if (category) {
    condition = { categoryId: category };
  }
  const products = await Product.find(condition)
    .populate({ path: 'categoryId' })
    .sort({ createdAt: -1 })
    .select({ __v: 0 });
  return successData(res, products);
};

export const addProduct = async (req, res, next) => {
  try {
    const {
      name,
      description,
      categoryId,
      price,
      rating,
      price_after_discount,
      quantity,
      sold,
      view,
    } = req.body;
    const image = {
      public_id: req.image.public_id,
      secure_url: req.image.secure_url,
    };
    const images = req.images.map((image) => {
      return {
        public_id: image.public_id,
        secure_url: image.secure_url,
      };
    });
    const image_id = images.map((image) => image.secure_url);
    const product = await new Product({
      name,
      description,
      categoryId,
      image: image.secure_url,
      images: image_id,
      price,
      rating,
      price_after_discount,
      quantity,
      sold,
      view,
    }).save();
    const cloudinaryProduct = {
      productId: product._id,
      image: image,
      images: images,
    };
    if (product) {
      await new CloudinaryProduct(cloudinaryProduct).save();
    }
    // .exec(async (err, product) => {
    //   if (err) throw new Error('Tạo không thành công');
    //   await new CloudinaryProduct({
    //     productId: product._id,
    //     image: images,
    //     images: images,
    //   }).save();
    // });
    return successData(res, product);
  } catch (error) {
    return errorServer(res, error.message);
  }
};

export const updateProduct = async (req, res, next) => {
  try {
    const {
      name,
      description,
      category,
      price,
      rating,
      price_after_discount,
      quantity,
      sold,
      view,
    } = req.body;
    const image = {
      public_id: req.image.public_id,
      secure_url: req.image.secure_url,
    };
    const images = req.images.map((image) => {
      return {
        public_id: image.public_id,
        secure_url: image.secure_url,
      };
    });
    const image_id = images.map((image) => image.secure_url);
    const product = omitByCustom({
      name,
      description,
      category,
      price,
      rating,
      price_after_discount,
      quantity,
      sold,
      view,
      image: image.secure_url,
      images: image_id,
    });
    const productDB = await Product.findByIdAndUpdate(req.params.id, product, {
      new: true,
    });

    const cloudinaryProduct = {
      productId: productDB._id,
      image: image,
      images: images,
    };
    if (product) {
      await new CloudinaryProduct(cloudinaryProduct).save();
    }
    return successData(res, productDB);
  } catch (error) {
    return errorServer(res, error.message);
  }
};

export const deleteProduct = async (req, res, next) => {
  try {
    const { id } = req.params;
    const productDB = await Product.findByIdAndDelete(id);
    return successData(res, {
      message: 'Xóa sản phẩm thành công',
      data: productDB,
    });
  } catch (error) {
    return errorServer(res, error.message);
  }
};

export const deleteManyProducts = async (req, res, next) => {
  try {
    const list_id = req.body.list_id.map((id) => mongoose.Types.ObjectId(id));
    const productDB = await Product.find({
      _id: { $in: list_id },
    });
    const deleteData = await Product.deleteMany({
      _id: { $in: list_id },
    });
    return successData(res, {
      message: `Xóa ${deleteData.deletedCount} sản phẩm thành công`,
      data: { deleted_count: deleteData.deletedCount },
    });
  } catch (error) {
    return errorServer(res, error.message);
  }
};

export const searchProduct = async (req, res, next) => {
  try {
    let { searchText } = req.query;
    searchText = decodeURI(searchText);
    let condition = { $text: { $search: `\"${searchText}\"` } };
    // xét không phải là Admin if(!isAdmin(req)
    condition = Object.assign(condition, { visible: true });
    const products = await Product.find(condition)
      .populate('categoryId')
      .sort({ createdAt: -1 })
      .select({ __v: 0, description: 0 });
    return successData(res, products);
  } catch (error) {
    return errorServer(res, error.message);
  }
};

// ratings: [{star: Number,postedBy: { type: ObjectId, ref: "User" },}]
export const productStar = async (req, res, next) => {
  try {
    const product = await Product.findById(req.params.productId).exec();
    const user = await User.findOne({ email: req.user.email }).exec();
    const { star } = req.body;

    // who is updating?
    // check if currently logged in user have already added rating to this product?
    let existingRatingObject = product.rating.find(
      (ele) => ele.postedBy.toString() === user._id.toString()
    );

    // if user haven't left rating yet, push it
    if (existingRatingObject === undefined) {
      let ratingAdded = await Product.findByIdAndUpdate(
        product._id,
        {
          $push: { ratings: { star, postedBy: user._id } },
        },
        { new: true }
      ).exec();
      console.log('ratingAdded', ratingAdded);
      res.json(ratingAdded);
    } else {
      // if user have already left rating, update it
      const ratingUpdated = await Product.updateOne(
        {
          ratings: { $elemMatch: existingRatingObject },
        },
        { $set: { 'ratings.$.star': star } },
        { new: true }
      ).exec();
      console.log('ratingUpdated', ratingUpdated);
      res.json(ratingUpdated);
    }
  } catch (error) {}
};
