const knex = require('../database/knex')

class OrdersController {
  async create(request, response) {
    const { status, price, meals } = request.body;
    const { userId } = request.params;

    const orderId = await  knex('orders').insert({
      status,
      price,
      userId
    });
    
    // Verify id of ordered meals
    const existingMeals = await knex('meals').orderBy('name')
    const mealsIds = []

    meals.map(meal => {
      for (var key in existingMeals) {
        var meal_name = existingMeals[key].name
        meal = meal.toLowerCase();
        meal_name = meal_name.toLowerCase();
        if(meal == meal_name) {
          mealsIds.push(existingMeals[key].id)
        }
      }
    })

    const ordered_meals = mealsIds.map(meal => {
      return {
        orderId,
        mealId: meal
      }
    });

    await knex('orderMeal').insert(ordered_meals);

    response.json();
  }

  // async index(request, response) {
  //   const orders = await knex('orders').orderBy('created_at');

  //   response.json({orders})
  // }

  async show(request, response) {
    const id = request.params;

    const meals = await knex('orderMeal')
    .where('orderId', '=' ,id.id)
    .innerJoin('meals', 'orderMeal.mealId', '=', 'meals.id')
    .select('meals.name')

    response.json(meals)
  }
}

module.exports = OrdersController;