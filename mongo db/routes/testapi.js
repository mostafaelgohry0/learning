var express = require('express');
var router =express.Router();


router.get("/api",function(req,res){

	res.send("hi from api ");
});






module.exports = router; 
