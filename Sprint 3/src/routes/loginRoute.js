const express = require("express");
const router = express.Router();

const logincontroller = require("../controllers/loginController");


router.get("/", logincontroller.getLogin);





module.exports = router;