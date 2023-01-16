const productsModels = require('../models/productsModels');

const listAllProducts = async () => {
  const products = await productsModels.listAllProducts();

  return products;
};

const getByIdProducts = async (id) => {
  const products = await productsModels.getByIdProducts(id);

  if (!products) return { type: 404, message: 'Product not found' };

  return { type: null, message: products };
};

module.exports = {
  listAllProducts,
  getByIdProducts,
};