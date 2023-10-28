const mongoose = require('mongoose')



const schema = mongoose.Schema
const userSchema = new schema (
    {
        userName:String,
        password:String,
    }
)



const userModel = mongoose.model("User", userSchema)
exports.userModel = userModel