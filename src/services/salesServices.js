const Joi = require('joi');

const salesModels = require('../models/salesModels');

// const createSales = async (name) => {
//   const products = await salesModels.createSales();
//   name.forEach(async (element) => {
//     const { quantity, productId } = element;
//     await salesModels.createSales({ products, quantity, productId });
//   });
//   return products;
// };

const schema = Joi.object({
  name: Joi.string().min(5).required(),
}).required();

const createSales = async (salesArray) => {
  const salesArraySchema = Joi.array().items(schema);
  const { error } = salesArraySchema.validate(salesArray);
  console.log(error);
  if (error.type) throw { status: 400, message: error.message };
  console.log(error.type);

  const newSalesPromises = salesArray.map((sale) => salesModels.createSales(sale));
  const newSalesPromise = await Promise.all(newSalesPromises);

  const newSales = salesArray
    .map((sale, index) => ({ id: newSalesPromise[index], ...sale }));
  return newSales;
};

module.exports = {
  createSales,
};
