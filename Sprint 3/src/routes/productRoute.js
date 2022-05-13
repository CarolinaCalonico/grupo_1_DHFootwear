const express = require("express");
const router = express.Router();

const productcontroller = require("../controllers/productController");



router.get("/productDetail", productcontroller.getProductDetail);
router.get("/cart", productcontroller.getProductCart);







module.exports = router;