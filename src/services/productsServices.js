const { productsModels } = require('../models');

const listAllProducts = async () => {
  const products = await productsModels.listAllProducts();

  return products;
};

const getByIdProducts = async (id) => {
  const products = await productsModels.getByIdProducts(id);

  if (!products) return { type: 404, message: 'Product not found' };

  return { type: null, message: products };
};

const createProducts = async (name) => {
  const products = await productsModels.createProducts(name);
  return products;
};

const updateProducts = async ({ id, name }) => {
  const products = await productsModels.updateProducts(id, name);
  return products;
};

const deleteProducts = async ({ id }) => {
  const products = await productsModels.deleteProducts({ id });
  return products;
};

module.exports = {
  listAllProducts,
  getByIdProducts,
  createProducts,
  updateProducts,
  deleteProducts,
};