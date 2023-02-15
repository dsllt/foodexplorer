const knex = require('../database/knex');
const AppError = require('../utils/AppError');
const DiskStorage = require('../providers/DiskStorage');

class ImagesController {
  async update(request, response){
    const imageFilename = request.file.filename;

    const diskStorage = new DiskStorage();

    const filename = await diskStorage.saveFile(imageFilename);
    console.log(filename);

    response.json(filename)
  }

}

module.exports = ImagesController;