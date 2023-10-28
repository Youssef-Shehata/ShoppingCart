const {productModel} = require('../models/Product')


exports.createProduct=async (req,res) =>{
  const instance = new productModel(req.body)
  await instance.save()
  res.json(instance)


}




// module.exports = {
//   createProduct,
// }