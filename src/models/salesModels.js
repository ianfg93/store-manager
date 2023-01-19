const connection = require('./connection');

const registerSales = async () => {
 const [{ insertId }] = await connection.execute(
    'INSERT INTO StoreManager.sales (date) VALUES()',
  );
  return insertId;
};

const createSales = async ({ saleId, productId, quantity }) => {
  const [newSale] = await connection.execute(
    'INSERT INTO StoreManager.sales_products (sale_id, product_id, quantity) VALUES (?, ?, ?)',
    [saleId, productId, quantity],
  );
  // console.log(newSale);
  return newSale.insertId;
};

module.exports = {
  registerSales,
  createSales,
};
