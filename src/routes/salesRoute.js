const express = require('express');

const salesControllers = require('../controllers/salesControllers');
const { validateSales, verifyIfProductExist } = require('../middlewares/validateSales');

const salesRouter = express.Router();

// salesRouter.get('/saler', salesControllers.listAllSales);
salesRouter.post('/sales', validateSales, verifyIfProductExist, salesControllers.createSales);

module.exports = salesRouter;