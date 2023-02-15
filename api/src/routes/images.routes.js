const { Router } = require("express");
const multer = require("multer");
const uploadConfig = require("../configs/upload");

const ImagesController = require("../controllers/ImagesController");

const imagesRoutes = Router();
const upload = multer(uploadConfig.MULTER);

const imagesController = new ImagesController();

imagesRoutes.patch('/image', upload.single('image'), imagesController.update);

module.exports = imagesRoutes;