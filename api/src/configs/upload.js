const path = require('path')
//multer: biblioteca para fazer upload de imagens
const multer = require('multer')
//para criar um nome único para as imagens
const crypto = require('crypto')

//TMP: folder which first receives the image
const TMP_FOLDER = path.resolve(__dirname, '..', '..', 'tmp')
//UPLOADS: folder in which the image is saved
const UPLOADS_FOLDER = path.resolve(TMP_FOLDER, 'uploads')
const MULTER = {
  storage: multer.diskStorage({
    destination: TMP_FOLDER,
    filename(request, file, callback) {
      const fileHash = crypto.randomBytes(10).toString('hex')
      const fileName = `${fileHash}-${file.originalname}`

      return callback(null, fileName)
    }
  })
}

module.exports = {
  TMP_FOLDER,
  UPLOADS_FOLDER,
  MULTER
}
