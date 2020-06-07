/*
var http = require('http');
var formidable = require('formidable');
var fs = require('fs');

http.createServer(function (req, res) {
  if (req.url == '/fileupload') {
    var form = new formidable.IncomingForm();
    form.parse(req, function (err, fields, files) {
      var oldpath = files.filetoupload.path;
      var newpath = '/home/elgohryeng/learning/node.js/preview/' + files.filetoupload.name;
      fs.rename(oldpath, newpath, function (err) {
        if (err) throw err;
        res.write('File uploaded and moved!');
        res.end();
      });
 });
  } else {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('<form action="fileupload" method="post" enctype="multipart/form-data">');
    res.write('<input type="file" name="filetoupload"><br>');
    res.write('<input type="submit">');
    res.write('</form>');
    return res.end();
  }
}).listen(8080);
*/

var http = require('http');
var express = require('express')
var app = express();
var fs = require("fs");
var path = require("path")
var formidable = require("formidable");
var multer = require("multer")   


const storage = multer.diskStorage({
  destination: './public/uploads/',
  filename: function(req, file, cb){
    cb(null,file.fieldname + '-' + Date.now() + path.extname(file.originalname));
  }
});




const upload = multer({
   storage : storage 
   
}); 




app.get('/', (req, res) => {
 //  res.sendFile(__dirname + '../public/sign.html');
 res.sendFile(path.join(__dirname ,"./","public" ,"sign.html")); 

});


app.post('/', upload.single('image'), (req, res) => {
   console.log(req.file);
  res.redirect('/');
});






    app.listen(8080);
    






console.log("Running at Port 8080");


