
var http = require("http");

var express = require('express');
var app = express();
var path = require("path");
var fs=require("fs");
var url=require("url");


// us fs module 
var data = fs.readFileSync('web.html');
//console.log(data.toString());



http.createServer(function (requset,response) {
    
    
    var page ;
    
    console.log(requset.url);
    
    
    if(requset.url=='/'){
        
        
        //response.writeHead(200,{'content_type':'text/Html'})
        response.write('<h1> Welcome to http nodejs <h1> ');
        //response.write(requset.url);
        ///response.write(data.toString());
        
        
        

          
         
        response.end("bla bal ");
        
        
       
       
        
        
        
    
    }
    
    
     else if(requset.url=='/mostafa'){
        
       
       
       
       
       fs.readFile('htmlFile.html',function(err, data) {
        response.writeHead(200, {'Content-Type': 'text/html'});
        response.write(data);
        return response.end();
        });
       
       
    
        
        
    }
    
    
    
    
    
    
    
    
    else {    
   // response.write( 'no page ' );
    
    
    
    
      var q = url.parse(requset.url,true);
      
      console.log(q.pathname);
      var file = "." + q.pathname;
      
      
      
      fs.readFile(file ,function (err,data){
          
          
          if(err){
          
           return response.end( file  + "no page ");
    }
    
          
        response.writeHead(200, {'Content-Type': 'text/html'});
        response.write(data);
        return response.end();
          
    });
       
        
    }
    
    
    
}).listen(8080);



console.log("this frisrt node ");

