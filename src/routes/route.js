const express = require('express');

const { productsControllers } = require('../controllers');
const validateProduct = require('../middlewares/validateProduct');

const router = express.Router();

router.get('/products', productsControllers.listAllProducts);
router.get('/products/:id', productsControllers.getByIdProducts);
router.post('/products', validateProduct.validateProducts, productsControllers.createProducts);
router.put('/products/:id', validateProduct.updateProducts, productsControllers.updateProducts);
router.delete('/products/:id', validateProduct.deleteProducts, productsControllers.deleteProducts);

module.exports = router;