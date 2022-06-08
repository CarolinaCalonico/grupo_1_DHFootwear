const express = require("express");
const router = express.Router();

const registercontroller = require("../controllers/registerController");


router.get("/", registercontroller.getRegister);





module.exports = router;