const express = require("express")
const router = express.Router()
const {createContact} = require("./../controllers/contacts.controls")

//routes

router.post("/", (req,res,next)=>{console.log("Main route working"),next()},createContact)




module.exports = router