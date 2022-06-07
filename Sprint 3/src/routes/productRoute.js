const express = require("express");
const router = express.Router();

const productcontroller = require("../controllers/productController");



router.get("/productDetail", productcontroller.getProductDetail);
router.get("/cart", productcontroller.getProductCart);

router.get("/productAdd", productcontroller.getProductAdd );
router.get("/productEdit", productcontroller.getProductEdit);






module.exports = router;