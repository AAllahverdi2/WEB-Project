const mongoose=require("mongoose")
const userSchema=mongoose.model("userScheme",new mongoose.Schema({
    username:{type:String,required:true},
    password:{type:String,required:true},
    basket:[{}],
    wishlist:[{}],
    role:{type:String,default:"user",enum:["user","admin"]},
}))
module.exports={userSchema}