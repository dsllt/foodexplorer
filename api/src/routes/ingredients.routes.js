const { Router } = require("express");
const multer = require("multer");
const uploadConfig = require("../configs/upload");

const IngredientController = require("../controllers/IngredientsController");

const ingredientsRoutes = Router();
const upload = multer(uploadConfig.MULTER);

const ingredientController = new IngredientController();

ingredientsRoutes.post('/', ingredientController.create);
ingredientsRoutes.get('/', ingredientController.show);
ingredientsRoutes.delete('/', ingredientController.delete);
ingredientsRoutes.patch('/avatar', upload.single('avatar'), (request, response) =>{
  console.log(request.file.filename);
  response.json();
});

module.exports = ingredientsRoutes;