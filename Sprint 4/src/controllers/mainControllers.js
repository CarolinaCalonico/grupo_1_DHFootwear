// const { home } = require("nodemon/lib/utils")


// const gethome = (req,res) =>{
//     res.render("home")
// }



// module.exports = {
//     gethome
// }



//Cambios


const path = require("path");
const fs = require("fs");
const { parse } = require("path");
const pathToProducts = path.join(__dirname, "../database/products.json");
const productsList = fs.readFileSync(pathToProducts);
const productos = JSON.parse(productsList);



const mainControllers = {
    home: (req, res) => {
        res.render("home");
    },
    productdetail: (req, res) => {
        res.render("productDetail");
    },
    carrito: (req, res) => {
        res.render("productCart");
    },
    register: (req, res) => {
        res.render("register");
    },
    login: (req, res) => {
        res.render("login");
    },
    products: (req, res) => {
        res.render("productList", { productos });
    },
    newProduct: (req, res) => {
        res.render("productAdd");
    },
};

module.exports = mainControllers;