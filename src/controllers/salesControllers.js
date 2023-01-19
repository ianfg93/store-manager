const salesServices = require('../services/salesServices');

const listAllSales = async (_req, res) => {
  const sales = await salesServices.listAllSales();

  return res.status(200).json(sales);
};

const getByIdSales = async (req, res) => {
  const { id } = req.params;
  const { type, message } = await salesServices.getByIdSales(id);

  if (type) return res.status(404).json({ message });

  return res.status(200).json(message);
};

const createSales = async (req, res) => {
  const name = req.body;
  const sale = await salesServices.createSales(name);
  console.log(sale);
  if (sale.type) return res.status(sale.type).json({ message: sale.message });
  return res.status(201).json(sale);
};
  
module.exports = {
  createSales,
  listAllSales,
  getByIdSales,
};