const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
  destination: './uploads',
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}_${file.originalname}`);
  }
});

const fileFilter = (req, file, cb) => {
  const ext = path.extname(file.originalname).toLowerCase();
  if (ext !== '.pdf') {
    return cb(new Error('Solo se permiten archivos PDF'));
  }
  cb(null, true);
};

const upload = multer({ storage, fileFilter });
module.exports = upload;
