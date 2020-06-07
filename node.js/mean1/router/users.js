var http = require('http');
const express = require('express');

var app = express();
const router = express.Router();
const bodyParser = require('body-parser')
const path = require('path')
const user = require('../models/user.js')
router.use(express.static("../public"));

var formidable = require("formidable");
var multer = require("multer") ;


// use body  parser  and work with express
router.use(bodyParser.urlencoded(
    {extended:true}
));



const storage = multer.diskStorage({
  destination: './public/uploads/',
  filename : function(req, file, cb){
    cb(null,file.fieldname + '-'+ req.body.email + '-'+  Date.now() + path.extname(file.originalname));
  }
});




const upload = multer({
   storage : storage 
   
}); 



var x="kkk";


router.get('/data',(req,res,err)=>{
res.render("userdata.ejs",{myData:x});    

});




router.get('/',(req,res,err)=>{

 res.sendFile(path.join(__dirname ,"..","public" ,"sign.html"));  
});


router.post('/',upload.single('image'),(req,res,next)=>{
 
    let user1 = new user({
        userFristName : req.body.frist_name,
        userLastName : req.body.last_name,
        userEmail : req.body.email,
        userPassword : req.body.password,
        userBirthDay : req.body.birth_day,
        userAdress : req.body.adress,
        userType : req.body.type, 
        userImage : req.file.path

    });

   

    
    user1.save((err,user)=>{
        
        if(err){

            console.log("err");
          /*
              return res.send({
                success :false ,
                message : " fail to save  "
            });  
            */
        }

        console.log(" save ");

    /*      res.send({
           success :true,
            message : " saved true ",
            user   
        })

 */
     
        
    })

    res.render("userdata.ejs",{myData:x});   
    
        
 
    
})

module.exports=router;


