const createUsers = `
  CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name VARCHAR,
    email VARCHAR,
    password VARCHAR,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    isAdmin INTEGER DEFAULT 0
  )
`;

module.exports = createUsers; 