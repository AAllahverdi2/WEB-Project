const express = require("express")
const router = express.Router()
const { userControllerr } = require("../Controller/user.COntroller")
router.get("/", userControllerr.getAllUsers)
router.post("/login", userControllerr.login)
router.post("/register", userControllerr.register)
router.put("/update-basket/:id", userControllerr.updateBasket)
module.exports = router