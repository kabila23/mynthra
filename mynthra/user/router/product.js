const express = require('express')
const router = express.Router()
const pro_router = require('../controller/product')


router.post('/getproduct',pro_router.getproduct)
router.get('/getallproducts', pro_router.getallproduct)
router.post('/addtocart',pro_router.addtocart)
router.get('/viewcart',pro_router.viewcard)

module.exports =router;