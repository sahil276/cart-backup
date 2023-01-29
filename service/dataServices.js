// import db
const db = require('./db');

// Get all product details from db
const getProducts = () => {
    return db.Product.find().then(
        (result) => {
            if(result){
                return{
                    status:true,
                    statusCode:200,
                    products:result
                }
            }else{
                return{
                    status:false,
                    statusCode:401,
                    message:'Products not found'
                }
            }
        }
    )
}

module.exports = {
    getProducts
}