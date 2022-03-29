const connection = require('./connection/connection');


const createUser = async(user) => {
  const { firstName, lastName, email, password } = user;
  const query = 'INSERT INTO users_crud.users (firstName, lastName, email, password) VALUES (?, ?, ?, ?)';
  const [result] = await connection.execute(query, [firstName, lastName, email, password]);
  const { insertId: id } = result;
  return { id, firstName, lastName, email };
};

module.exports = { createUser };
