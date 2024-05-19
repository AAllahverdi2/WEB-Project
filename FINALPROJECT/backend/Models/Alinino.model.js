const mongoose = require("mongoose")
const Alinino = mongoose.model("alinino", new mongoose.Schema({
    name: { type: String, required: true },
    price: { type: Number, required: true },
    categories: [{ type: String, required: true }],
    yazar: { type: String, require: true },
    image: { type: String, require: true },
    duration:{type:String,require:true},
    material:{type:String,require:true},
    raiting:{type:Number,require:true},
    firstPrice:{type:Number,require:true},
    endirim:{type:Number,require:true},
    delivery:{type:String,require:true},
    yas:{type:Number,require:true},
    type:{type:String,require:true}

}))
module.exports={Alinino}