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
    
 // res.send("hallo");
    
    
 connection.query('select * from math', function (err, rows, fields) {
  if (err) throw err

      //console.log(rows.length);
     //res.send(rows.length)
     
     //res.sendStatus("llllll");
   
     res.send('haloo ' + rows[0].email)
     // res.json(rows);
     //console.log('The solution is: ', rows[1].solution)
});

connection.end()
    
    
    
});


app.listen(8080);

console.log("Running at Port 8080");


