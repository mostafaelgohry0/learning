var express = require("express");
var app     = express();
var path    = require("path");
var bodyParser= require("body-parser");


var mysql = require('mysql');



var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "test1"
});


connection.connect(function(err) {
  if (err) throw err;
  

});






app.use(express.static("./public"));

// use body body parser  and work with express

app.use(bodyParser.urlencoded(
    
    {extended:true}

));


app.set('view engine', 'ejs');







app.get('/',function(req,res){
    
 res.sendFile(path.join(__dirname+'/login.html'));
    
        
    
});


/*


app.post('/',function(req,res){
    
    
  connection.query('select * from math', function (err, rows, fields) {
  if (err) throw err

      
      var input_email = req.body.email ;
      var input_pass = req.body.pass ;
      var table_length = rows.length ;
      var found_mail = false ;    //  to check if email is correct 
      
    
       console.log(rows.length);
       console.log(input_email);
       console.log(input_pass);
      
      
    for (i=0;i<table_length;i++){
        
            if (rows[i].email==input_email && rows[i].password==input_pass ){
                res.send('haloo ' + input_email ) ;
                found_mail = true ;
                break ;   
            }                 
    }  
       
      
      if(found_mail == false){
          
          res.send(' incorrect email or password  ' + input_email ) ;
      }
       
});

//connection.end()
        
});


*/



/// for sign up 

app.post('/',function(req,res){
     
      var frist_name = req.body.frist_name;
      var last_name = req.body.last_name;
      var email = req.body.email ;
      var pass = req.body.password ;
      var birthday =req.body.birth_day;
      var type = req.body.type;
    
       /// var datetime = new Date();
    
    var d1 = new Date();

    //var d2 = new Date(dateString);

    //var d3 = new Date(jsonDate);

   // var d4 = new Date(year, month, day);

    //var d5 = new Date(year, month, day, hour, minute, second, millisecond);
    
    
    console.log(d1)
  //  console.log(d2)
    //console.log(d3)
   //console.log(d4)
    //console.log(d5)
    
    

        //console.log(datetime);
    
    
    
        console.log(frist_name);
        console.log(last_name);
        console.log(email);
        console.log(pass); 
        console.log(birthday);
        console.log(type);
    
    
    res.send("log data ");
    
});







app.listen(8080);

console.log("Running at Port 8080");


