const { Xeberler } = require("../Models/Xeberler.model")
const XeberlerController = {
    getAll: async (req, res) => {
        try {
            const target = await Xeberler.find({})
            res.send(target)
        } catch (error) {
            res.send("item is not a fount")
        }
    },
    getById: async (req, res) => {
        try {
            const {id}=req.params
            const alinino = await Xeberler.findById(id)
            res.send(alinino)
        } catch (error) {
            res.send("item is not a fount")
        }
    },
    Post: async (req, res) => {
        try {
            const {name,image,desc,date,categories}=req.body
            const newProduct=new Xeberler({name,image,desc,date,categories})
            await newProduct.save()
            res.send(newProduct)
        } catch (error) {
            res.send("item is not a fount")
        }
    },
    edit: async (req, res) => {
        try {
           const {id}=req.params
           const {name,image,desc,date,categories}=req.body
        //    await Alinino.findByIdAndUpdate(id,{name,price,categories,desc,image,duration,material,raiting,firstPrice,endirim,delivery,yas,type,yazar})
        await Xeberler.findByIdAndUpdate(id,{name,image,desc,date,categories})  
        res.send("item updated")
        } catch (error) {
            res.send("item is not a fount")
        }
    },
    
    delete: async (req, res) => {
        try {
           const {id}=req.params
           await Xeberler.findByIdAndDelete(id)
           res.send("deleted")
        } catch (error) {
            res.send("item is not a fount")
        }
    },
    
}
module.exports={XeberlerController}