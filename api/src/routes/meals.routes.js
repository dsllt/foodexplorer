const { Router } = require("express");
const multer = require("multer");
const uploadConfig = require("../configs/upload");

const MealsController = require("../controllers/MealsController");

const mealsRoutes = Router();
const upload = multer(uploadConfig.MULTER);

const mealsController = new MealsController();

mealsRoutes.post('/', mealsController.create);
mealsRoutes.delete('/:id', mealsController.delete);
mealsRoutes.get('/:id', mealsController.show);
mealsRoutes.patch('/image', upload.single('image'), mealsController.update);

module.exports = mealsRoutes;