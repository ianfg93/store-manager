const { productsServices } = require('../services');

const listAllProducts = async (_req, res) => {
  const products = await productsServices.listAllProducts();

  return res.status(200).json(products);
};

const getByIdProducts = async (req, res) => {
  const { id } = req.params;
  const { type, message } = await productsServices.getByIdProducts(id);

  if (type) return res.status(404).json({ message });

  return res.status(200).json(message);
};

const createProducts = async (req, res) => {
    const { name } = req.body;
    const id = await productsServices.createProducts({ name });
  return res.status(201).json({ name, id });
};

const updateProducts = async (req, res) => {
  const { name } = req.body;
  const { id } = req.params;
  await productsServices.updateProducts({ id, name });
  return res.status(200).json({ id, name });
};

module.exports = {
  listAllProducts,
  getByIdProducts,
  createProducts,
  updateProducts,
};
