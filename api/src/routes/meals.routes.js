const { Router } = require("express");
const multer = require("multer");
const uploadConfig = require("../configs/upload");

const MealsController = require("../controllers/MealsController");
const ImagesController = require("../controllers/ImagesController");

const mealsRoutes = Router();
const upload = multer(uploadConfig.MULTER);

const mealsController = new MealsController();
const imagesController = new ImagesController();

mealsRoutes.post('/', mealsController.create);
mealsRoutes.delete('/:id', mealsController.delete);
mealsRoutes.get('/', mealsController.show);
mealsRoutes.put('/', mealsController.update);
mealsRoutes.patch('/image', upload.single('image'), imagesController.update);

module.exports = mealsRoutes;