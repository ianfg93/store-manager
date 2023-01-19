const connection = require('./connection');

// const listAllSales = async () => {
//   const [result] = await connection.execute(
//  `SELECT sales.id as saleId, sales.date, salesProduct.product_id as productId, salesProduct.quantity
//   FROM StoreManager.sales_products AS salesProduct
// INNER JOIN
//   StoreManager.sales AS sales
// ON sales.id = salesProduct.sale_id
// ORDER BY sales.id, salesProduct.product_id`,
//     );
//   return result;
// };

// const getByIdSales = async (id) => {
//   const [[sales]] = await connection.execute(
//     `SELECT 
//     sales.date, salesProduct.product_id AS productId, salesProduct.quantity
// FROM
//     StoreManager.sales_products AS salesProduct
//         INNER JOIN
//     StoreManager.sales AS sales 
//   ON sales.id = salesProduct.sale_id
//   WHERE sales.id = ?
// ORDER BY sales.id, salesProduct.product_id`, [id],
//   );
//   return sales;
// };

const registerSales = async () => {
  const [{ insertId }] = await connection.execute(
    'INSERT INTO StoreManager.sales (date) VALUES(?)', [new Date()],
  );
  return insertId;
};

module.exports = {
  registerSales,

  // listAllSales,
  // getByIdSales,
};
