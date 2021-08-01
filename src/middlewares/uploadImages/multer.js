// const multer = require('multer');
// const path = require('path');

// export const uploadImage = (type) => {
//   const storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//       const pathOrigin = path.resolve(__dirname, `../../uploads/${type}s`);
//       cb(null, pathOrigin);
//     },
//     filename: function (req, file, cb) {
//       cb(null, Date.now() + '-' + file.originalname);
//     },
//   });

//   const upload = multer({ storage });

//   return upload.single(type);
// };

const multer = require('multer');
import path from 'path';

const checkFileTypeImage = (file, cb) => {
  // Allowed ext
  const filetypes = /jpeg|jpg|png|gif/;
  // Check ext
  const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
  // Check mime
  const mimetype = filetypes.test(file.mimetype);

  if (mimetype && extname) {
    return cb(null, true);
  } else {
    return cb('Error: Images Only!');
  }
};
const checkFileTypeAny = (file, cb) => {
  return cb(null, true);
};

export const uploadImage = multer({
  storage: multer.diskStorage({}),
  limits: {
    fileSize: 15 * 1024 * 1024,
  },
  fileFilter: (req, file, cb) => {
    checkFileTypeImage(file, cb);
  },
});

export const uploadFile = multer({
  storage: multer.diskStorage({}),
  limits: {
    fileSize: 15 * 1024 * 1024,
  },
  fileFilter: (req, file, cb) => {
    checkFileTypeAny(file, cb);
  },
});
