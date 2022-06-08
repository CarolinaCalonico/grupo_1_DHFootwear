// const { home } = require("nodemon/lib/utils")


const gethome = (req,res) =>{
    res.render("home")
}



module.exports = {
    gethome
}