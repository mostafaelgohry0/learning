var express = require('express');
var socket = require('socket.io');

var app = express();

var server = app.listen(8080,function(){

	console.log('sever run on 8080 ')
});




var io = socket(server);


app.get('/',function(req,res){

	res.sendFile(__dirname + '/websockets.html');
});



io.on('connection',function(socket){

	console.log('connected : ' + socket.id);

	socket.on('disconnect',function(){

		console.log("id loged out : " + socket.id);
	})
})





