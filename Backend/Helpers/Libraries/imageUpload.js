const CustomError = require("../error/CustomError")
const multer = require("multer")
const crypto = require('crypto');
const { getStorage } = require('firebase-admin/storage');

const uploadImageToFirebase = async (id, filePath, folderName) => {

  
  const bucket = getStorage().bucket();
  // Upload new photo to Firebase Storage
  
  const fileName = folderName + "_" + id + "_" + crypto.randomBytes(5).toString('hex');

  const uploadRes = await bucket.upload(filePath, {
    destination: `${folderName}/${fileName}`
  });

  const file = bucket.file(`${folderName}/${fileName}`)

  await file.makePublic();

  const photoUrl = await file.getSignedUrl({
    action: 'read',
    expires: '03-17-2025', // Adjust the expiration date as needed
  });

  return photoUrl;

}



const fileFilter = (req, file, cb) => {

  allowedMimeTypes = ["image/jpeg", "image/jpg", "image/png", "image/gif"]

  if (!allowedMimeTypes.includes(file.mimetype)) {
    return (new CustomError("Please provide a valid image file ", 400), null)
  }

  cb(null, true);
}

const imageUpload = multer({ dest: 'uploads/', fileFilter })

module.exports = { imageUpload, uploadImageToFirebase };