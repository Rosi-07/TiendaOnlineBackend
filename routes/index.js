const express = require('express');
const router = express.Router();

const productRoutes = require('./productRoutes');
//otras



//otras
router.use('/products', productRoutes);

module.exports = router;
