const salesServices = require('../services/salesServices');

// const createSales = async (req, res) => {
//     const { name } = req.body;
//   const id = await salesServices.createSales({ name });
//   return res.status(201).json({ name, id });
// };

const createSales = async (req, res, next) => {
  try {
    const name = req.body;  
    const id = await salesServices.createSales(name);
    return res.status(201).json(id);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createSales,
};