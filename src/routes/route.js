const express = require('express');

const { productsControllers } = require('../controllers');
const validate = require('../middlewares/validateProduct');

const router = express.Router();

router.get('/products', productsControllers.listAllProducts);
router.get('/products/:id', productsControllers.getByIdProducts);
router.post('/products', validate, productsControllers.createProducts);

module.exports = router;