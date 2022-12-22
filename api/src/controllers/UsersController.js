const AppError = require('../utils/AppError')
const { hash, compare } = require('bcryptjs')

const sqliteConnection = require('../database/sqlite')

class UsersController{
  async create(request, response){
    const { name, email, password } = request.body;

    const database = await sqliteConnection();
    const checkIfUserExists = await database.get('SELECT * FROM users WHERE email = (?)', [email]);

    if(checkIfUserExists){
      throw new AppError('Este e-mail já está cadastrado.')
    }

    const hashedPassword = await hash(password, 8);

    await database.run('INSERT INTO users (name, email, password) VALUES (?, ?, ?)', [name, email, hashedPassword]);

    return response.status(201).json();
  }

  async update(request, response) {
    const { name, email, password, old_password } = request.body;
    const { id } = request.params;
    const database = await sqliteConnection();

    const getUserById = await database.get('SELECT * FROM users WHERE id = (?)', [id]);
    if(!getUserById){
      throw new AppError('Usuário não encontrado.')
    }

    const userUpdatedEmail = await database.get('SELECT * FROM users WHERE email = (?)', [email]);
    if(userUpdatedEmail && userUpdatedEmail.id !== getUserById.id){
      throw new AppError('E-mail já cadastrado.')
    }

    if(password && !old_password){
      throw new AppError('Você precisa informar a senha antiga para redefinir a senha.')
    }

    if(password && old_password){
      const checkOldPassword = await compare(old_password, getUserById.password);
      
      if(!checkOldPassword){
        throw new AppError('A senha antiga está incorreta.')
      }

      getUserById.password = await hash(password, 8);
    }

    getUserById.name = name ?? getUserById.name;
    getUserById.email = email ?? getUserById.email;

    await database.run(`
    UPDATE users SET 
    name = ?,
    email = ?,
    password = ?
    WHERE id = ?`, 
    [getUserById.name, getUserById.email, getUserById.password, id]);

    return response.json();
  }
}

module.exports = UsersController;