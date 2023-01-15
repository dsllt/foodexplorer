const { Router } = require("express");

const FavMealsController = require("../controllers/FavMealsController");
const ensureAuthentication = require('../middlewares/ensureAuthentication')

const favMealsRoutes = Router();

const favMealsController = new FavMealsController();

favMealsRoutes.use(ensureAuthentication);

favMealsRoutes.post('/', favMealsController.create);
favMealsRoutes.get('/', favMealsController.show);

module.exports = favMealsRoutes;