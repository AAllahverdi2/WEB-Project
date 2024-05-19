const express=require("express")
const router=express.Router()
const {XeberlerController}=require("../Controller/Xeberler.Controller")
router.get("/",XeberlerController.getAll)
router.get("/:id",XeberlerController.getById)
router.post("/",XeberlerController.Post)
router.put("/:id",XeberlerController.edit)
router.delete("/:id",XeberlerController.delete)
module.exports=router