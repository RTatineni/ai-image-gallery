const aws = require('aws-sdk')
const multer = require('multer')
const multerS3 = require('multer-s3')
const config = require('../config/prod.js')

var s3 = new aws.S3()

aws.config.update({
    secretAccessKey:config.AWS_SECRET_ACCESS,
    accessKeyId:config.AWS_ACCESS_KEY,
    region:"us-east-2"
})

const upload = multer({
  storage: multerS3({
      s3: s3,
      bucket: 'gallery-images-aa',
      key: function (req, file, cb) {
          console.log(file);
          cb(null, file.originalname); //use Date.now() for unique file keys
      }
  })
});

module.exports = upload