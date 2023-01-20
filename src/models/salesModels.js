const connection = require('./connection');

const listAllSales = async () => {
  const [result] = await connection.execute(
 `SELECT sales.id AS saleId, sales.date, salesProduct.product_id AS productId, salesProduct.quantity
    FROM StoreManager.sales_products AS salesProduct
     INNER JOIN
    StoreManager.sales AS sales
  ON sales.id = salesProduct.sale_id`,
  );
  return result;
};

const getByIdSales = async (id) => {
  const [sale] = await connection.execute(
 `SELECT sales.id AS saleId, sales.date, salesProduct.product_id AS productId, salesProduct.quantity
    FROM StoreManager.sales_products AS salesProduct
     INNER JOIN
    StoreManager.sales AS sales 
  ON sales.id = salesProduct.sale_id
    WHERE sales.id = ?`, [id],
  );
   if (!sale || sale.length === 0) return undefined;
  const result = sale.map(({ date, productId, quantity }) => ({
    date, productId, quantity,
  }));
  return result;
};

const registerSales = async () => {
  const [{ insertId }] = await connection.execute(
    'INSERT INTO StoreManager.sales (date) VALUES(?)', [new Date()],
  );
  return insertId;
};

module.exports = {
  registerSales,
  listAllSales,
  getByIdSales,
};
