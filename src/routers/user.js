const express = require('express');
const router = express.Router();
const { authenticate, authorize } = require('*/middlewares/auth');
import { uploadImage } from '*/middlewares/uploadImages/multer';
import {
  uploadImageCloud,
  removeImage,
} from '*/middlewares/uploadImages/cloudinary';
import * as userController from '*/controllers/user.controller';
import { ROLE } from '*/constants/user';

router.get('/', authenticate, authorize('Admin'), userController.getUsers);
router.get(
  '/:id',
  authenticate,
  authorize(ROLE.ADMIN),
  userController.getUserByAdmin
);
router.get('/', authenticate, userController.getUserByUser);

router.post('/', userController.Register);
router.post('/login', userController.Login);

router.post(
  '/upload-avatar',
  authenticate,
  uploadImage.single('avatar'),
  removeImage,
  uploadImageCloud,
  userController.uploadAvatar
);

router.patch('/', authenticate, userController.updateUser);
router.patch(
  '/update-user/:id',
  authenticate,
  authorize(ROLE.ADMIN),
  userController.updateUserByAdmin
);

router.delete(
  '/:id',
  authenticate,
  authorize(ROLE.ADMIN),
  removeImage,
  userController.deleteUser
);

export default router;
