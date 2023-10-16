const {productModel} = require('../models/Product')


exports.createProduct=async (req,res) =>{
  console.log(req.body)
  const instance = new productModel(req.body)
  await instance.save()
  res.send(instance.toObject())


}




// module.exports = {
//   createProduct,
// }