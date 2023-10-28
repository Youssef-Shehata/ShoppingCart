const { userModel } = require("../models/UserModel")





exports.registerController =async (req,res)=>{
  const userInstance = new userModel(req.body)
  await userInstance.save()
  res.json(userInstance)




}