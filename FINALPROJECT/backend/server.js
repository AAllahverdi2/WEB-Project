const express=require("express")
const app=express()
const AlininoRouter=require("./Routes/Alinino.Routes")
const userRRouter=require("./Routes/User.Router")
const OrderRouter=require("./Routes/Order.routes")
const XeberlerRouter=require("./Routes/Xeberler.routes")
const cors=require("cors")
const mongoose=require("mongoose")
app.use(cors())
require('dotenv').config()
const PORT=process.env.PORT || 4007
app.use(express.json())
mongoose.connect("mongodb+srv://tu7ljr8ww:Allahverdi123@cluster0.hlwgpfm.mongodb.net/").then(res=>{
    console.log("connected to mongodb")
})
app.use("/alinino",AlininoRouter)
app.use("/user",userRRouter)
app.use("/order",OrderRouter)
app.use("/xeberler",XeberlerRouter)
app.listen(PORT,()=>{
    console.log("back running on 4007")
})
