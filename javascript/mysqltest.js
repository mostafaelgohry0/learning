var mysql = require('mysql');
var http = require("http");
var util = require("util");


var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "test1"
});


con.connect(function(err) {
  if (err) throw err;
  
  

});



  
/// to do sql query 

http.createServer(function (requset,response) {

    
     
    //response.writeHead(200, {'Content-Type': 'application/json'});
con.query("select * from table1", function (err, result) {
    if (err) throw err;
    
    console.log(result);
    response.end("this : " + result );
   /// response.end( util.inspect(result) );
    
    
  });

  
response.end();

    
}).listen(8080);


