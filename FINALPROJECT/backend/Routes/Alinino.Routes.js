const express=require("express")
const router=express.Router()
const {AlininoController}=require("../Controller/Alinino.controller")
router.get("/",AlininoController.getAll)
router.get("/:id",AlininoController.getById)
router.post("/",AlininoController.Post)
router.put("/:id",AlininoController.edit)
router.delete("/:id",AlininoController.delete)
module.exports=router