const express = require('express');
const router = express.Router();

import * as productController from '*/controllers/product.controller';
const { authenticate, authorize } = require('*/middlewares/auth');
import { uploadImage } from '*/middlewares/uploadImages/multer';
import {
  uploadImagesCloud,
  removeImages,
} from '*/middlewares/uploadImages/cloudinary';
import { ROLE } from '*/constants/user';

router.get('/', productController.getProducts);
router.get('/:id', productController.getProduct);
router.get(
  '/all',
  authenticate,
  authorize(ROLE.ADMIN),
  productController.getAllProducts
);

router.post(
  '/',
  authenticate,
  authorize(ROLE.ADMIN),
  uploadImage.fields([
    { name: 'image', maxCount: 1 },
    { name: 'images', maxCount: 8 },
  ]),
  uploadImagesCloud,
  productController.addProduct
);

router.put(
  '/:id',
  authenticate,
  authorize(ROLE.ADMIN),
  removeImages,
  uploadImage.fields([
    { name: 'image', maxCount: 1 },
    { name: 'images', maxCount: 8 },
  ]),
  uploadImagesCloud,
  productController.updateProduct
);

router.delete(
  '/:id',
  authenticate,
  authorize(ROLE.ADMIN),
  removeImages,
  productController.deleteProduct
);

export default router;
