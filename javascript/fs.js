// this file to test fs module 
// fs use to create , read ,update ,delete  files 

var fs = require('fs');
var http = require('http');


console.log ("start reading ");


/*
fs.appendFile('test.txt',"blabalbla",function(err){
    
    if(err) throw (err);
    
});

*/


 var filesyc = fs.readFileSync('test.txt')
 
 
 var cssfile = fs.readFileSync('css.css')
 
 
    
    





console.log ("end  reading ");


////  read files 
http.createServer(function (req,res){
    
    
    
    
    
    if (req.method=="GET"){
        
    var myurl=req.url.split("/");
    
    for (i=1;i<myurl.length;i++){
        
        
    console.log(myurl[i]);    
        
    }
    
   
    fs.readFile('htmlFile.html' , function(err,data){
        
        
        
        
        ///res.writeHead(200, {'Content-Type': 'text/css'});
                 
        /// res.write("method " + req.method);
    
       /// res.write("this is fs ");
        
        /// res.write(filesyc);
        
      
       if (req.url=='/css.css'){
           
            res.writeHead(200, {'Content-Type': 'text/css'});
            res.write(cssfile);
       }
        
        
        
        else{
            
            res.writeHead(200, {'Content-Type': 'text/html'});
             res.write(data);    
        }
         
         
        res.end();
        
    });
    
    
    }
    
    
   else  if (req.method=="POST"){
       
       
       
       
       
       if (req.url=='/css.css'){
           
            res.writeHead(200, {'Content-Type': 'text/css'});
            res.write(cssfile);
       }
        
        
       
       
        else if (req.url=='/js.js'){
           
            res.writeHead(200, {'Content-Type': 'text/js'});
            res.write(jsfile);
       }
        
        
       
       
       
       
       
       
            else {
             
           res.writeHead(200, {'Content-Type': 'text/html'});
           
             res.write(js1htmlfile);
         }
        
       /*
            var body ="";
            res.writeHead(200, {'Content-Type': 'text/plain'});
            
       
       
            console.log("body" + body);
            res.write( "body" + body);
            res.write("hi");
         */   
            res.end();
        
        
        
    }
    
    
    
}).listen(8080);






console.log("the server is run now ");