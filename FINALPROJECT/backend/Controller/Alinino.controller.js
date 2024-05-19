const { Alinino } = require("../Models/Alinino.model")
const AlininoController = {
    getAll: async (req, res) => {
        try {
            const target = await Alinino.find({})
            res.send(target)
        } catch (error) {
            res.send("item is not a fount")
        }
    },
    getById: async (req, res) => {
        try {
            const {id}=req.params
            const alinino = await Alinino.findById(id)
            res.send(alinino)
        } catch (error) {
            res.send("item is not a fount")
        }
    },
    Post: async (req, res) => {
        try {
            const {name,price,categories,desc,image,duration,material,raiting,firstPrice,endirim,delivery,yas,type,yazar}=req.body
            const newProduct=new Alinino({name,price,categories,desc,image,duration,material,raiting,firstPrice,endirim,delivery,yas,type,yazar})
            await newProduct.save()
            res.send(newProduct)
        } catch (error) {
            res.send("item is not a fount")
        }
    },
    edit: async (req, res) => {
        try {
           const {id}=req.params
           const {name,price,categories,desc,image,duration,material,raiting,firstPrice,endirim,delivery,yas,type,yazar}=req.body
        //    await Alinino.findByIdAndUpdate(id,{name,price,categories,desc,image,duration,material,raiting,firstPrice,endirim,delivery,yas,type,yazar})
       const target= await Alinino.findByIdAndUpdate(id,{name,price,categories,desc,image,duration,material,raiting,firstPrice,endirim,delivery,yas,type,yazar})  
        res.send(target)
        } catch (error) {
            res.send("item is not a fount")
        }
    },
    
    delete: async (req, res) => {
        try {
           const {id}=req.params
           await Alinino.findByIdAndDelete(id)
           res.send("deleted")
        } catch (error) {
            res.send("item is not a fount")
        }
    },
    
}
module.exports={AlininoController}