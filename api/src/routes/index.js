const { Router } = require('express')

const usersRouter = require('./users.routes')
const ordersRouter = require('./orders.routes')
const ingredientsRouter = require('./ingredients.routes')
const mealsRouter = require('./meals.routes')
const favMealsRouter = require('./favMeals.routes')
const sessionsRouter = require('./sessions.routes')
const imagesRouter = require('./images.routes')

const routes = Router()

routes.use('/users', usersRouter)
routes.use('/orders', ordersRouter)
routes.use('/ingredients', ingredientsRouter)
routes.use('/meals', mealsRouter)
routes.use('/favMeals', favMealsRouter)
routes.use('/sessions', sessionsRouter)
routes.use('/images', imagesRouter)

module.exports = routes
