const productsModels = require('../models/productsModels');

const validateProducts = (req, res, next) => {
  const { name } = req.body;
  if (!name) {
    return res.status(400).json({ message: '"name" is required' });
  }
  if (name.length < 5) {
    return res.status(422).json({ message: '"name" length must be at least 5 characters long' });
  }
 return next();
};

const updateProducts = async (req, res, next) => {
  const { name } = req.body;
  const { id } = req.params;
  const product = await productsModels.getByIdProducts(id);
  if (!name) {
    return res.status(400).json({ message: '"name" is required' });
  }
  if (name.length < 5) {
    return res.status(422).json({ message: '"name" length must be at least 5 characters long' });
  }
  if (!product) res.status(404).json({ message: 'Product not found' });
  next();
};

module.exports = {
  validateProducts,
  updateProducts,
};
