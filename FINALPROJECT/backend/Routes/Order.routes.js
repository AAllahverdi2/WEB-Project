const express=require("express")
const router=express.Router()
const {OrderController}=require("../Controller/Order.controller")
router.get("/",OrderController.getAll)
router.get("/:id",OrderController.getById)
router.post("/",OrderController.Post)
router.put("/:id",OrderController.edit)
router.delete("/:id",OrderController.delete)
module.exports=router