const productsServices = require('../services/productsServices');

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

module.exports = {
  listAllProducts,
  getByIdProducts,
};
