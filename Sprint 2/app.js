const express = require('express');
const app = express();
const path = require('path');

app.use(express.static('public'));

app.listen(3000, ()=>{
    console.log('Server Status: OK');
});

app.get('/', (req,res)=>{res.sendFile(__dirname + '/views/index.html');});
app.get("/home", (req,res) => {res.sendFile(path.join(__dirname, "./views/index.html"));});
app.get("/product-detail", (req,res) => {res.sendFile(path.join(__dirname, "./views/productDetail.html"));});
app.get("/product-cart", (req,res) => {res.sendFile(path.join(__dirname, "./views/productCart.html"));});
app.get("/register", (req,res) => {res.sendFile(path.join(__dirname, "./views/register.html"));});
app.get("/login", (req,res) => {res.sendFile(path.join(__dirname, "./views/login.html"));});