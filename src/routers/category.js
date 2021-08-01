const express = require('express');
const router = express.Router();

const { authenticate, authorize } = require('*/middlewares/auth');
import * as categoryController from '*/controllers/category.controller';

router.get('/', categoryController.getCategories);
router.post(
  '/',
  authenticate,
  authorize('Admin'),
  categoryController.createCategory
);
router.get(
  '/:id',
  authenticate,
  authorize('Admin'),
  categoryController.getCategoryById
);
router.put(
  '/:id',
  authenticate,
  authorize('Admin'),
  categoryController.updatePutCategory
);
router.patch(
  '/:id',
  authenticate,
  authorize('Admin'),
  categoryController.updatePatchCategory
);
router.delete(
  '/:id',
  authenticate,
  authorize('Admin'),
  categoryController.deleteCategory
);

export default router;
