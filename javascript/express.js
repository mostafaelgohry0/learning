var express = require("express");
var app     = express();
var path    = require("path");
var bodyParser= require("body-parser");



app.use(express.static("./public"));

// use body body parser  and work with express

app.use(bodyParser.urlencoded(
    
    {extended:true}

));


app.set('view engine', 'ejs');




app.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/web.html'));
  //__dirname : It will resolve to your project folder.
});

app.get('/graph',function(req,res){
  res.sendFile(path.join(__dirname+'/graph.html'));
});

app.get('/test',function(req,res){
  res.sendFile(path.join(__dirname+'/htmlFile.html'));
    
     //res.write("hi ");
     //res.send("hi sent; ")

    
});






app.get('/re',function(req,res){
  res.redirect("/")
  
});


/*

app.post('/test', function (req,res,next ){
    
    console.log( " use next  hi  ");
    
    next();
    
    
    
},function(req,res){
    
    res.sendFile(path.join(__dirname+'/js1.html'));
    //app.sent("posted....")
    
    
});

*/



app.post('/test',function(req,res){
    
    var myname= req.body.name;
    
    console.log(myname)
    console.log(req.body.pass)
    
    if (req.body.name=="mostafa"){
        
        res.send("wellcome mostafa");
    }
    
    else 
        
        //res.send("you cann't log in ");
        res.render("ejsfile.ejs",{name:req.body.name});
        
     
    ///res.sendFile(path.join(__dirname+'/js1.html'));
    //app.sent("posted....")
    
    
});








app.get('/pic',function(req,res){
    
    //res.sendFile(path.join(__dirname+'/js1.html'));
     app.write("posted....")
    
    
});





app.listen(8080);

console.log("Running at Port 8080");
