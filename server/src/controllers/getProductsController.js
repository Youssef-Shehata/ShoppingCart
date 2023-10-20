const {productModel} = require('../models/Product')


exports.getProductsController=async (req,res) =>{
  const products = await productModel.find({})
  res.json(products)


}