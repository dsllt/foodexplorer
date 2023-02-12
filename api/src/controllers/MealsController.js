const knex = require('../database/knex');
const AppError = require('../utils/AppError');
const DiskStorage = require('../providers/DiskStorage');

class MealsController {
  async create(request, response) {
    const { name, description, price, image, ingredients, category } = request.body;

    const mealId = await knex('meals').insert({
      name, 
      description, 
      price, 
      category,
      image
    });

    ingredients.map(async (ingredient) => {
      await knex('ingredients').insert({
        name: ingredient,
        mealId
      });
    })

    return response.json();
  }

  async delete(request, response){
    const { ids } = request.body;

    ids.map(async id => {
      await knex('meals').where({ id }).delete();
    })

    return response.json();
  }

  async update(request, response){
    const imageFilename = request.file.filename;

    const diskStorage = new DiskStorage();

    const filename = await diskStorage.saveFile(imageFilename);
    console.log(filename);

    response.json(filename)
  }

  async show(request, response) {
    const { id } = request.params;
    const meal = await knex('meals')
    .where({ id }).first()

    return response.json(meal)
  }
}

module.exports = MealsController;