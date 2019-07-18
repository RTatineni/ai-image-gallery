const upload = require("../services/file-upload")
var express = require("express")
var router = express.Router()



router.post("/image-upload",upload.array('image',1), function(req,res){
    res.redirect("/")
})




module.exports = router