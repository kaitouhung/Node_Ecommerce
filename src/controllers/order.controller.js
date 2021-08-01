const { Order } = require('*/models/Order');
const { Product } = require('*/models/Product');
import { successData, errorServer } from '*/config/response';
import { STATUS_PURCHASE } from '*/constants/purchase';

export const addToCart = async (req, res, next) => {
  try {
    const { product_id, buy_count } = req.body;
    const productAdd = await Product.findById(product_id);
    if (productAdd) {
      if (buy_count > productAdd.quantity)
        throw new Error('Quantity not enough');
      const order = await Order.findOne({
        userId: req.user._id,
        status: STATUS_PURCHASE.IN_CART,
      });
      let data = null;
      if (order) {
        const productExist = order.products.find(
          (product) =>
            productAdd._id.toString() === product.productId.toString()
        );
        if (productExist) {
          const newBuyCount = productExist.buy_count + buy_count;
          const productUpdate = await Order.findOneAndUpdate(
            {
              _id: order._id,
              products: { $elemMatch: { productId: productExist.productId } },
            },
            { $set: { 'products.$.buy_count': newBuyCount } },
            { new: true }
          ).populate('products.productId');
          data = productUpdate.products;
        } else {
          const newProduct = {
            productId: productAdd._id,
            buy_count: buy_count,
            price: productAdd.price,
            price_after_discount: productAdd.price_after_discount,
          };
          // $addToSet !== $push ở chỗ $push có thể có phần tử giống nhau lập lại
          const productUpdate = await Order.findOneAndUpdate(
            { _id: order._id },
            { $addToSet: { products: newProduct } },
            { new: true }
          ).populate('products.productId');
          data = productUpdate.products;
        }
      } else {
        const newOrder = {
          userId: req.user._id,
          status: STATUS_PURCHASE.IN_CART,
          products: [
            {
              productId: productAdd._id,
              buy_count: buy_count,
              price: productAdd.price,
              price_after_discount: productAdd.price_after_discount,
            },
          ],
        };
        const productUpdate = await new Order(newOrder)
          .save()
          .populate('products.productId');
        data = productUpdate.products;
      }
      return successData(res, data);
    } else {
      throw new Error('Not Product');
    }
  } catch (error) {
    return errorServer(res, error.message);
  }
};

export const updateCart = async (req, res, next) => {
  try {
    const { product_id, buy_count } = req.body;
    const order = await Order.findOne({
      userId: req.user._id,
      status: STATUS_PURCHASE.IN_CART,
    });
    let data = null;
    if (order) {
      const productAdd = await Product.findById(product_id);
      const productExist = order.products.find(
        (product) => productAdd._id.toString() === product.productId.toString()
      );
      if (productExist) {
        if (buy_count > productAdd.quantity)
          throw new Error('Quantity is not enough');
        const productUpdate = await Order.findOneAndUpdate(
          {
            _id: order._id,
            products: { $elemMatch: { productId: productExist.productId } },
          },
          { $set: { 'products.$.buy_count': buy_count } },
          { new: true }
        ).populate('products.productId');
        data = productUpdate.products;
      }
    }
    return successData(res, data);
  } catch (error) {
    return errorServer(res, error.message);
  }
};

export const getCart = async (req, res, next) => {
  try {
    const { status = STATUS_PURCHASE.ALL } = req.query;
    const userId = req.user._id;
    let condition = {
      userId: userId,
      status: {
        $ne: STATUS_PURCHASE.IN_CART,
      },
    };
    if (Number(status) !== STATUS_PURCHASE.ALL) {
      condition.status = status;
    }
    const order = await Order.find(condition)
      .populate('products.productId')
      .sort({ createdAt: -1 });
    return successData(res, order);
  } catch (error) {
    return errorServer(res, err.message);
  }
};

export const deleteCart = async (req, res, next) => {
  try {
    let product_ids = req.body;
    const order = await Order.findOne({
      userId: req.user._id,
      status: STATUS_PURCHASE.IN_CART,
    });
    let data = null;
    if (order) {
      // const newOrder = order.products.filter((product) =>
      //   product_ids.every((id) => id !== product.productId)
      // );

      const productDelete = await Order.findOneAndUpdate(
        { _id: order._id, status: STATUS_PURCHASE.IN_CART },
        { $pull: { products: { productId: { $in: product_ids } } } },
        { new: true }
      ).populate('products.productId');

      data = productDelete.products;
    }
    if (data.length < 1) {
      await Order.deleteOne({
        _id: order._id,
        status: STATUS_PURCHASE.IN_CART,
      });
    }
    return successData(res, {
      message: 'Delete Product successfully',
      cart: data,
    });
  } catch (error) {
    return errorServer(res, error.message);
  }
};

export const buyProducts = async (req, res, next) => {
  try {
    const order = await Order.findOne({
      userId: req.user._id,
      status: STATUS_PURCHASE.IN_CART,
    });
    if (order) {
      // Update Product
      const bulkOption = order.products.map((item) => {
        return {
          updateOne: {
            filter: { _id: item.productId._id }, // IMPORTANT item.product
            update: {
              $inc: { quantity: -item.buy_count, sold: +item.buy_count },
            },
          },
        };
      });
      const updatedProduct = await Product.bulkWrite(bulkOption, {});
      // Update Order
      const cartOriginal = order.products.reduce((result, current) => {
        return result + current.price * current.buy_count;
      }, 0);
      const totalAfterDiscount = order.products.reduce((result, current) => {
        return result + current.price_after_discount * current.buy_count;
      }, 0);
      const cartTotal = cartOriginal - totalAfterDiscount;
      const orderUpdate = {
        status: STATUS_PURCHASE.WAIT_FOR_CONFIRMATION,
        cartTotal: cartOriginal,
        totalAfterDiscount: cartTotal,
      };
      const updatedOrder = await Order.findByIdAndUpdate(
        { _id: order._id },
        orderUpdate,
        { new: true }
      ).populate('products.productId');
      const data = await Promise.all([updatedOrder, updatedProduct]);
      return successData(res, data[0]);
    }
  } catch (error) {
    return errorServer(res, error.message);
  }
};
