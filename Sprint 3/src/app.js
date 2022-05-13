const express = require('express');
const app = express();
const path = require('path');

app.use("/static", express.static(path.join(__dirname, "../public")));

app.listen(3000, ()=>{
    console.log('Server Status: OK');
});

// HABILITAR RECEPCION INFO
app.use(express.urlencoded({extended:false}));
app.use(express.json());


// CONFIGURACION DE EJS
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "./views"));



// Rutas export
const mainRoute = require("./routes/mainRoute");
const productRoute = require("./routes/productRoute");
const registerRoute = require("./routes/registerRoute");
const loginRoute = require("./routes/loginRoute");

// Rutas
app.use('/', mainRoute);
app.use("/product", productRoute);
app.use("/register", registerRoute);
app.use("/login", loginRoute);
app.use("/productDetail", loginRoute);




// RUTAS VIEJAS 
// app.get("/home", (req,res) => 
//     {res.sendFile(path.join(__dirname, "./views/index.html"));});

// app.get("/product/detail", (req,res) => 
//     {res.sendFile(path.join(__dirname, "./views/productDetail.html"));});

// app.get("/product/cart", (req,res) => 
//     {res.sendFile(path.join(__dirname, "./views/productCart.html"));});

// app.get("/register", (req,res) => 
//     {res.sendFile(path.join(__dirname, "./views/register.html"));});

// app.get("/login", (req,res) => 
//     {res.sendFile(path.join(__dirname, "./views/login.html"));});