const express = require('express');
const app = express();
const path = require('path');
const { dirname } = require("path");
const { homedir } = require("os");


// app.use("/static", express.static(path.join(__dirname, "../public")));

app.listen(3000, () => {
    console.log('Server Status: OK');
});

// HABILITAR RECEPCION INFO
app.use(express.urlencoded({ extended: false }));
app.use(express.json());


// CONFIGURACION DE EJS
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "./views"));



// // Rutas export
// const router = require("./routes/main");
// // const mainRoute = require("./routes/mainRoute");
// const productRouter = require("./routes/products");
// const registerRoute = require("./routes/registerRoute");
// const loginRoute = require("./routes/loginRoute");

// // Rutas
// app.use('/', mainRoute);
// app.use("/products", productRouter);
// app.use("/register", registerRoute);
// app.use("/login", loginRoute);
// app.use("/productDetail", loginRoute);




// Sprint 4
const productRouter = require("./routes/products");

const methodOverride = require('method-override'); //Para  habilitar peticion http PUT y DELETE

const router = require("./routes/main");

const publicPath = path.resolve(__dirname, "../public");
app.use(express.static(publicPath));




app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(methodOverride('_method')); //Para  habilitar peticion http PUT y DELETE


app.set("views", [
    path.join(__dirname, "views/products"),
    path.join(__dirname, "views/users"),
    path.join(__dirname, "views/"),
]);



const rutaMain = require("./routes/main");
app.use("/", rutaMain);
app.use("/products", productRouter);