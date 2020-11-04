var express = require("express");
var app     = express();
var path    = require("path");
var bodyParser= require("body-parser");
var os =require("os");
var mysql = require("mysql");
var url = require("url");

var fs = require('fs');

var formidable = require("formidable")
app.use(express.static("./public"));

// use body body parser  and work with express
app.use(bodyParser.urlencoded(
    {extended:true}
));

app.set('view engine', 'ejs');


var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "pro"
});


function base64Encode(pic){
    
    var thepic=fs.readFileSync(pic);
    return thepic.toString('base64');
}



app.get('/',function(req,res){
    
   // res.sendFile(path.join(__dirname + '/login.html'));
   // console.log(os.totalmem());
    //console.log(os.hostname());
  //  console.log(connection);
    
    connection.query('select * from posts',function (err, rows, fields){
        if(err) throw err
        
     
        
    res.render("ejsfile.ejs",{mypic:rows});	
        console.log(rows.length);
       
        
});
 

});


app.get('/data',function(req,res){
    
    connection.query('select * from members',function (err, rows, fields){
        if(err) throw err
    
        console.log(rows.length);
        
        
        res.render("ejsfile.ejs",{myData:rows});	
});
    
    
})

app.get('/sign.html',function(req,res){
    
    res.sendFile(path.join(__dirname + '/sign.html'));
});




app.post('/sign.html',function(req,res){
    
    var fristName = req.body.frist_name;
    var lastName = req.body.last_name;
    var email = req.body.email;
    var password= req.body.password;
    var type = req.body.type;
    var birthDay=req.body.birth_day.slice(0,10);
    var adress = req.body.adress;
    var image = req.body.image;
    var isFound =false;;
    console.log(image);
   
    console.log(fristName,lastName,email,password,type,birthDay,adress)
    
    function insert_data(){
        
           connection.query('insert into members (email,f_name,l_name,type,birthday,adress,pass) values (?,?,?,?,?,?,?);',([email,fristName,lastName,type,birthDay,adress,password]),function (err, rows, fields){
            if(err) throw err
         
            res.send(" hi "+ fristName);
    
               // res.json(rows);
               // console.log(rows);
           });  
    };
     
     connection.query('select * from members',function (err, rows, fields){
         if(err) throw err;
         
         for(var i =0 ;i<rows.length;i++){
             if(email==rows[i].email){
                 res.send("the email register before please sign up  with anther email");
                 isFound = true;
                 break;
             }
         }
         
         if(isFound==false){
             //insert_data();
             console.log(image);
              console.log(typeof(image));
             res.send(" hi  inserted "+ image );
             
         }
         
         
    
       
     });

    

   
    
})





app.post('/',function(req,res){
   
    var email = req.body.email;
    var password= req.body.password;
    var isFound = false;
    
     connection.query('select * from members',function (err, rows, fields){
         if(err) throw err;
         
         for(var i =0 ;i<rows.length;i++){
             if(email==rows[i].email && password==rows[i].password){
                 console.log("true");
                 isFound = true;
                 break;
             }
             
         }
         
       
         
         if(isFound==true){
             // res.send("halllo " + rows[i].f_name +  " " + rows[i].l_name   );
              res.render("ejsfile.ejs",{myData:rows[i]});
             
         }
         else if (isFound == false) {
             res.sendFile(path.join(__dirname + '/login.html'));
             
         }   
             
         
         
         
    
       
     });

    
    //res.send(" hi "+ email);
   
    
})





//connection.end();

app.listen(8080);

console.log("Running at Port 8080");

