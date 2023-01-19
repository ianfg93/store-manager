const express = require('express');

const salesControllers = require('../controllers/salesControllers');
const { validateSales, verifyIfProductExist } = require('../middlewares/validateSales');

const salesRouter = express.Router();

salesRouter.get('/sales', salesControllers.listAllSales);
salesRouter.get('/sales/:id', salesControllers.getByIdSales);
salesRouter.post('/sales', validateSales, verifyIfProductExist, salesControllers.createSales);

module.exports = salesRouter;