//var m =require('./module1.js');

var  http = require('http');

var fs = require('fs');




var server = http.createServer(function(req,res){
    
    if(req.url=='/'){
        res.write("hi node js ^ _ ^ ");
        var headers = req.headers;
        // res.write(toString(headers));
        //console.log(headers);
        res.end();
    }
    else if (req.url=='/test'){
        res.write("hi test ");
        res.end();
    }
    else {
        res.write("not allowed page  ......... out ");
        res.end();
    }
});


server.listen(8000);

console.log("open 8000");





