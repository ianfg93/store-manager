const connection = require('./connection');

const listAllProducts = async () => {
  const [result] = await connection.execute(
    'SELECT * FROM StoreManager.products ORDER BY id',
    );
  return result;
};

const getByIdProducts = async (id) => {
  const [[product]] = await connection.execute(
    'SELECT * FROM StoreManager.products WHERE id=?', [id],
  );
  return product;
};

const createProducts = async (name) => {
  const [{ insertId }] = await connection.execute(
    'INSERT INTO StoreManager.products (name) VALUES (?)', [name],
  );
  return insertId;
};

const updateProducts = async (id, name) => {
  await connection.execute(`UPDATE StoreManager.products SET name = ?
  WHERE id = ?`, [name, id]);
};

module.exports = {
  listAllProducts,
  getByIdProducts,
  createProducts,
  updateProducts,
};
