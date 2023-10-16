const mongoose = require('mongoose')



const schema = mongoose.Schema
const productSchema = new schema (
    {
        name:String,
        cost:Number,
        description:String,
        
    }
)



const productModel = mongoose.model("Product", productSchema)
exports.productModel = productModel