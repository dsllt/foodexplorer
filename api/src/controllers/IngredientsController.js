const knex = require('../database/knex')
const AppError = require('../utils/AppError');
const DiskStorage = require('../providers/DiskStorage');

class IngredientsController {
  async create(request, response) {
    const { name, image } = request.body;

    await knex('ingredients').insert({name, image});
    return response.json();
  }

  async show(request, response) { 
    const ingredients = await knex('ingredients')

    return response.json(ingredients);
  }

  async delete(request, response){
    const { ids } = request.body;

    ids.map(async id => {
      await knex('ingredients').where({ id }).delete();
    })

    return response.json();
  }

  async update(request, response){
    const name = request.body.name;
    const imageFilename = request.file.filename;

    const diskStorage = new DiskStorage();

    const ingredient = await knex('ingredients').where({ name }).first();
    
    if(!ingredient){
      throw new AppError('Esta ingrediente ainda não foi cadastrado.', 401);
    }

    if(ingredient.image){
      await diskStorage.deleteFile(ingredient.image);
    }

    const filename = await diskStorage.saveFile(imageFilename);
    ingredient.image = filename;

      await knex('ingredients').update(ingredient).where({ name });

    response.json({})
  }
}

module.exports = IngredientsController;