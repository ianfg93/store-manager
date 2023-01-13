const connection = require('./connection');

const listAllProducts = async () => {
  const [result] = await connection.execute('SELECT * FROM products ORDER BY id');
  return result;
};

const getByIdProducts = async (id) => {
  const [[place]] = await connection.execute('SELECT * FROM products WHERE id = ?', [id]);
  return place;
};

module.exports = {
  listAllProducts,
  getByIdProducts,
};
