const { Router } = require("express");
const multer = require("multer");
const uploadConfig = require("../configs/upload");

const IngredientController = require("../controllers/IngredientsController");

const ingredientsRoutes = Router();
const upload = multer(uploadConfig.MULTER);

const ingredientController = new IngredientController();

ingredientsRoutes.post('/', ingredientController.create);
ingredientsRoutes.get('/:id', ingredientController.show);
ingredientsRoutes.delete('/', ingredientController.delete);
ingredientsRoutes.patch('/image', upload.single('image'), ingredientController.update);

module.exports = ingredientsRoutes;