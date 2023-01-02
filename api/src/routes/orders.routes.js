const { Router } = require("express");

const OrdersController = require("../controllers/OrdersController");

const ordersRoutes = Router();

const ordersController = new OrdersController();

ordersRoutes.post('/:userId', ordersController.create);
//ordersRoutes.get('/', ordersController.index);
ordersRoutes.get('/:id', ordersController.show);

module.exports = ordersRoutes;