// const express = require("express");
// const router = express.Router();

// const homecontroller = require("../controllers/homeController")



// router.get("/", homecontroller.gethome);
// router.get("/home", homecontroller.gethome)






// module.exports = router;



const express = require("express");
const router = express.Router();
const mainControllers = require("../controllers/mainControllers");



router.get("/", mainControllers.home);
router.get("/login", mainControllers.login);
router.get("/carrito", mainControllers.carrito);


router.get("/productDetail", mainControllers.productdetail);
router.get("/register", mainControllers.register);
router.get("/productList", mainControllers.products);
router.get("/newProduct", mainControllers.newProduct);

module.exports = router;