const fs = require('fs');
const path = require('path');

// const productos_path = path.join(__dirname, '../data/productsDataBase.json');
// const leerProductos = fs.readFileSync(productos_path, 'utf-8');
// const productos = JSON.parse(leerProductos);







const getProductDetail = (req,res) => {
    res.render("./products/productDetail");
}

const getProductCart = (req,res) => {
    res.render("./products/productCart");
}

const  getProductAdd = (req,res) => {
    res.render("./products/productAdd");
}

const getProductEdit = (req,res) => {
    res.render("./products/productEdit");
}

// const getProductEdit = (req, res) => {
//     const id = req.params.iDproducto;

//     const productoPorEditar = productos.find((element) =>{
//         return element.id == id
//     });
    
//     res.render('formulario-edicion', {productoPorEditar});
// }


module.exports = {
    getProductDetail,
    getProductCart,
    getProductAdd,
    getProductEdit,
}