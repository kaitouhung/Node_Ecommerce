const express = require('express');
const router = express.Router();

const { authenticate, authorize } = require('*/middlewares/auth');
import * as orderController from '*/controllers/order.controller';

router.get('/get-cart', authenticate, orderController.getCart);
router.post('/add-to-cart', authenticate, orderController.addToCart);
router.put('/update-cart', authenticate, orderController.updateCart);
router.put('/delete-cart', authenticate, orderController.deleteCart);
router.post('/buy-products', authenticate, orderController.buyProducts);

export default router;
