const express = require('express');
const router = express.Router();
const cont = require('../controller/product')

router.post('/createproduct',cont.createProduct);

module.exports = router