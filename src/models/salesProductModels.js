const snakeize = require('snakeize');
const connection = require('./connection');

const createSales = async (sale) => {
  const newSaleProduct = snakeize(sale);
  const [newSale] = await connection.execute(
    'INSERT INTO StoreManager.sales_products (sale_id, product_id, quantity) VALUES (?, ?, ?)',
    [...Object.values(newSaleProduct)],
      );
  return newSale.insertId;
};

module.exports = {
  createSales,
};
