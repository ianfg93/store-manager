const Joi = require('joi');

const salesModels = require('../models/salesModels');
const salesProductModels = require('../models/salesProductModels');
// const productsModels = require('../models/productsModels');
// const validateSales = require('../middlewares/validateSales');

const listAllSales = async () => {
  const sales = await salesModels.listAllSales();

  return { type: '', message: sales };
};

const getByIdSales = async (id) => {
  const sales = await salesModels.getByIdSales(id);

  if (!sales) return { type: 404, message: 'Sale not found' };

  return { type: null, message: sales };
};

const createSales = async (salesArray) => {
  const salesArraySchema = Joi.array().items(Joi.object({ 
    productId: Joi.number().min(1).required(),
    quantity: Joi.number().min(1).required().messages({ 
      'number.min': '"quantity" must be greater than or equal to 1',
    }),
  }));
  const { error } = salesArraySchema.validate(salesArray);
  if (error) return { type: 201, message: error.message };
      const id = await salesModels.registerSales();

  const newSalesPromises = salesArray.map((sale) => salesProductModels.createSales({
    saleId: id, ...sale,
  }));
  await Promise.all(newSalesPromises);
  return { id, itemsSold: salesArray };
};

module.exports = {
  createSales,
  listAllSales,
  getByIdSales,
  };
