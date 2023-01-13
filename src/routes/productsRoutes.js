const express = require('express');
const productsController = require('../controllers/productsControllers');

const router = express.Router();
router.get('/', productsController.listAllProducts);
router.get('/:id', productsController.getByIdProducts);

module.exports = router;