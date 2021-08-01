const mongoose = require('mongoose');
import { STATUS_PURCHASE } from '*/constants/purchase';

const OrderSchema = new mongoose.Schema(
  {
    userId: { type: mongoose.SchemaTypes.ObjectId, ref: 'User' },
    status: { type: Number, default: STATUS_PURCHASE.WAIT_FOR_CONFIRMATION },
    products: [
      {
        productId: { type: mongoose.SchemaTypes.ObjectId, ref: 'Product' },
        buy_count: { type: Number },
        price: { type: Number },
        price_after_discount: { type: Number },
      },
    ],
    cartTotal: { type: Number },
    totalAfterDiscount: { type: Number },
  },
  { timestamps: true }
);

const Order = mongoose.model('Order', OrderSchema, 'Order');

module.exports = {
  OrderSchema,
  Order,
};
