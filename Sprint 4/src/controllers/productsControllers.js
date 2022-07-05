const fs = require('fs');
const path = require('path');
const { parse } = require("path");
const pathToProducts = path.join(__dirname, "../database/products.json");
const productsList = fs.readFileSync(pathToProducts);
const productos = JSON.parse(productsList);



// const getProductDetail = (req,res) => {
//     res.render("./products/productDetail");
// }

// const getProductCart = (req,res) => {
//     res.render("./products/productCart");
// }

// const  getProductAdd = (req,res) => {
//     res.render("./products/productAdd");
// }

// const getProductEdit = (req,res) => {
//     res.render("./products/productEdit");
// }



// module.exports = {
//     getProductDetail,
//     getProductCart,
//     getProductAdd,
//     getProductEdit,
// }




const productsControllers = {
  productsList: (req, res) => {
    res.render("productList", { productos: productos });
  },



  createProduct: (req, res) => {
    res.render("newProduct");

  },



  detalleProduct: (req, res) => {
    let id = req.params.idProduct;
    let productoSeleccionado = productos.find(el => el.id == id);

    res.render("productDetail", { producto: productoSeleccionado, productos: productos });
  },



  recordProduct: (req, res) => {
    let listadoIds = productos.map(el => { return el.id });
    let maxId = listadoIds.reduce((previous, current) => {
      return (current > previous) ? current : previous
    });
    let newProduct = {
      id: maxId + 1,
      categoria: req.body.categoria,
      marca: req.body.marca,
      titulo: req.body.titulo,
      precio: req.body.precio,
      descripcion: req.body.descripcion,
      stock: req.body.stock,
      imagen: path.join('/images-multer/', req.file.filename),

    }
    console.log(req.file);
    productos.push(newProduct);
    let newData = JSON.stringify(productos, null, 2);
    fs.writeFileSync(pathToProducts, newData);
    res.redirect('/products')
  },



  editProduct: (req, res) => {

    let id = req.params.idProduct;

    let productoSeleccionado = productos.find(el => el.id == id);

    res.render('editProduct', { producto: productoSeleccionado, productos: productos })
    console.log(productoSeleccionado.id + ' => ID DEL PRODUCTO A EDITAR - VIENE POR PARAMS');
  },



  putProduct: (req, res) => {
    const idProduct = req.params.idProduct;
    const categoria = req.body.categoria;
    const titulo = req.body.titulo;
    const marca = req.body.marca;
    const precio = req.body.precio;
    const descripcion = req.body.descripcion;

    // let newImage = path.join('/images-multer/', req.body.newImage); acá se aramaba mal path porque sacaba el mombre del archivo del body y hay que sacarlo der file del multer
    let newImage = path.join("/images-multer/", req.file.filename);
    let oldImage = req.body.oldImage;
    const imagen = newImage;
    console.log(req.file);
    console.log(newImage);
    console.log(oldImage);

    productos.forEach(element => {
      if (element.id == parseInt(idProduct)) {
        element.categoria = categoria;
        element.titulo = titulo;
        element.marca = marca;
        element.precio = precio;
        element.descripcion = descripcion;
        element.imagen = imagen;
      }
    });

    const newData = JSON.stringify(productos, null, 2);
    // console.log(parseInt(idProduct));
    // console.log (newData);

    fs.writeFileSync(pathToProducts, newData);


    res.redirect("/")
  },



  deleteProduct: (req, res) => {
    let idProduct = parseInt(req.params.idProduct);

    nuevaLista = productos.filter(el => el.id !== idProduct);

    let nuevosProductos = JSON.stringify(nuevaLista, null, 2);
    console.log('Funcionando el controlador');
    console.log(nuevosProductos);
    fs.writeFileSync(pathToProducts, nuevosProductos);

    res.redirect('/')
  }
};

module.exports = productsControllers;