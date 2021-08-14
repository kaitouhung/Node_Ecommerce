require('dotenv').config();
const cloudinary = require('cloudinary').v2;
const { CloudinaryProduct } = require('*/models/CloudinaryProduct');
const { Cloudinary } = require('*/models/Cloudinary');
import { successData, errorServer } from '*/config/response';

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Note: user: upload a image, product: a images, multiple images

export const uploadImageCloud = async (req, res, next) => {
  let result = await cloudinary.uploader.upload(req.file.path, {
    upload_preset: 'dev',
    resource_type: 'auto', // jpeg, png
  });
  req.cloudinary = result;
  next();
};

// export const uploadImagesCloud = async (req, res, next) => {
//   const image = await cloudinary.uploader.upload(req.files.image[0].path, {
//     upload_preset: 'products',
//     resource_type: 'auto', // jpeg, png
//   });
//   const images = await Promise.all(
//     req.files.images.map(
//       async (image) =>
//         await cloudinary.uploader.upload(image.path, {
//           upload_preset: 'products',
//           resource_type: 'auto', // jpeg, png
//         })
//     )
//   );
//   const result = await Promise.all([image, images]);
//   req.image = result[0];
//   req.images = result[1];
//   next();
// };

export const uploadImagesCloud = async (req, res, next) => {
  const image = await cloudinary.uploader.upload(req.files.image[0].path, {
    upload_preset: 'products',
    resource_type: 'auto', // jpeg, png
  });
  const images = await Promise.all(
    req.files.images.map((image) =>
      cloudinary.uploader.upload(image.path, {
        upload_preset: 'products',
        resource_type: 'auto', // jpeg, png
      })
    )
  );

  req.image = image;
  req.images = images;
  next();
};

export const removeImage = async (req, res, next) => {
  try {
    let typeId = null;
    if (req.user._id) {
      typeId = req.user._id;
    }
    if (req.params.id) {
      typeId = req.params.id;
    }
    const userCloudinary = await Cloudinary.findOne({ userId: typeId });
    if (userCloudinary) {
      await Promise.all([
        cloudinary.uploader.destroy(userCloudinary.public_id, {
          upload_preset: 'dev',
        }),
        Cloudinary.deleteOne({ userId: typeId }),
      ]);
    }
    next();
  } catch (error) {
    return errorServer(res, 'Cloudinary failed');
  }
};

export const removeImages = async (req, res, next) => {
  try {
    const productCloudinary = await CloudinaryProduct.findOne({
      productId: req.params.id,
    });

    if (productCloudinary) {
      await Promise.all([
        cloudinary.uploader.destroy(productCloudinary.image.public_id, {
          upload_preset: 'products',
        }),
        ...productCloudinary.images.map((image) =>
          cloudinary.uploader.destroy(image.public_id, {
            upload_preset: 'products',
          })
        ),
        CloudinaryProduct.deleteOne({
          productId: req.params.id,
        }),
      ]);
    }

    next();
  } catch (error) {
    return errorServer(res, 'Cloudinary failed');
  }
};
