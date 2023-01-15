const { Router } = require("express");

const UsersController = require("../controllers/UsersController");
const ensureAuthentication = require('../middlewares/ensureAuthentication')

const userRoutes = Router();

const usersController = new UsersController();

userRoutes.post('/', usersController.create);
userRoutes.put('/', ensureAuthentication, usersController.update);

module.exports = userRoutes;