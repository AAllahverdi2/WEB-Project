const mongoose = require("mongoose")
const Xeberler = mongoose.model("Xeberler", new mongoose.Schema({
    image: { type: String, required: true },
    desc:{type:String,require:true},
    date:{type:String,require:true},
    name:{type:String,require:true},
    categories: [{ type: String, required: true }],

}))
module.exports={Xeberler}