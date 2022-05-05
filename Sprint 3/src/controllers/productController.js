
const getProductDetail = (req,res) => {
    res.render("productDetail");
}

const getProductCart = (req,res) => {
    res.render("productCart");
}



module.exports = {
    getProductDetail,
    getProductCart,
}