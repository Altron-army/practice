const express=require("express");
const router=express.Router();
const {functioncontrollerwala,functionpost}=require("../controller/functioncontrollerwala")
router.get("/usmani",functioncontrollerwala)
router.post("/post1",functionpost)

module.exports=router;