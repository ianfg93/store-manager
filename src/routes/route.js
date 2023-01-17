const express = require('express');

const { productsControllers } = require('../controllers');
// const { validate } = require('../middlewares/validate');

const router = express.Router();

router.get('/products', productsControllers.listAllProducts);
router.get('/products/:id', productsControllers.getByIdProducts);
router.post('/products', productsControllers.createProducts);

module.exports = router;