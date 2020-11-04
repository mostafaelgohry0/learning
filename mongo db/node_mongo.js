
var express = require('express');
var app = express();
var path    = require("path");
var bodyParser= require("body-parser");

var http = require('http').Server(app);
var io = require('socket.io')(http);


//var routes = require('./routes/testapi');
//app.use(routes);

app.use('/',require('./routes/testapi'));


app.use(express.static("./public"));

// use body body parser  and work with express

app.use(bodyParser.urlencoded(
    {extended:true}
));


app.set('view engine', 'ejs');


/////// variables 

var logedInUserArray = [] ;
var usersID = [];
var logedInName;



app.get("/chat",function(req,res){
	res.sendFile(__dirname + '/chat.html');

});

/*
io.on('connection', function(socket){
	
	socket.on('chat message', function(msg){
    io.emit('chat message', msg);
  });


 	socket.on('chat message', function(msg){
    	console.log('message :' + msg);
  	});

  	socket.on('logedInUser',function(user){
  		io.emit('logedInUser',"kskkddkm")
  	})

  	socket.on('disconnect',function(){
  		console.log("disconnection...........")
  	});

});


*/



var mongodb = require('mongodb');
var MongoClient = require('mongodb').MongoClient
 var mongodbUrl = 'mongodb://localhost:27017/db2';

 //var mongodbUrl = 'mongodb://mostafa:root@ds145275.mlab.com:45275/chatdb1';



MongoClient.connect(mongodbUrl, function (err, db) {

  	if (err) throw err

	var mycollection =  db.collection('users')

   	app.get('/data',function(req,res){

		var result = mycollection.find().sort({name:1}).toArray(function (err, result) {
		if (err) throw err
		console.log(result[0].name)
		res.render("mongodata.ejs",{myData:result});	
		});
	});


    //  at home page 
	app.get("/",function(req,res){

 		res.send("hi ^_^ ")
 	});


    // at login page 
	app.get("/login",function(req,res){
		res.sendFile(path.join(__dirname+'/login.html'));
 	});









	app.post("/login",function(req,res){

    /// login data
    var inputLoginEmail = req.body.loginEmail ;
    var inputLoginPass = req.body.loginPass ;

    /// signup data 

    var inputSignupName = req.body.signName ;
    var inputSignupAge = req.body.signAge; 
    var inputSignupEmail = req.body.signEmail;
    var inputSignupPass = req.body.signPass; 
    var inputSignupType = req.body.signType;



	if(req.body.login == "log"){

		db.collection('users').find({email: inputLoginEmail}).toArray( function(err,result){
       	    if (err) throw err ;

            // check if there is no matched email 
            if(result[0] == undefined){
                res.send("no email");  
            }

       	    else {
                logedInName = result[0].name;
                //  when correct login redire to chat page 
                if(inputLoginPass == result[0].password){
                    res.redirect('/chat');
                    logedInUserArray.push(logedInName);
                    console.log("hi  " + logedInName);
                    console.log("array " + logedInUserArray);
                    console.log("user "+ logedInName);

                    io.on('connection', function(socket){
                        socket.on('disconnect',function(){
                        //io.emit('logedOutUser',logedInName);
                        //console.log("bye  from Server " + logedInName);
                        })
                    });
                }
            }    
       }); 
	}

    else if (req.body.signup == "sign"){
    	res.send(" hi post sign ");
		var insertData = { name : inputSignupName ,age : inputSignupAge ,email : inputSignupEmail ,
            password : inputSignupPass , type : inputSignupType } ;

		//// insert the data 
		db.collection("users").insertOne(insertData , function (err,result){
			if (err) throw err ;
			console.log ("data inserted ");
			
		}); 
    }; 

});
  	
});





io.on('connection', function(socket){
	
				socket.on('chat message', function(msg){
    				io.emit('chat message', msg );
  				});


 				socket.on('chat message', function(msg){
    			  console.log('message :' + msg);
  				});


  				socket.emit('user',logedInName);
                 
                var temId = logedInName +"|"+ socket.id;
                
                usersID.push(temId);
  				

               
  				var sendUserArray = setInterval(function(){
  					socket.emit('logedInUsers',logedInUserArray);  					
  				},3000);



  			   socket.on('disconnectUser',function(logedOutUser){

                  console.log("user loged out : " + logedOutUser);
  			   })
  				

  				socket.on('typing',function(user){

  					console.log('typing now : '+ user );
  					socket.broadcast.emit('typing',user);
  				})	
  				
            

              

            
  				socket.on('disconnect',function(){
					
  					
  					//io.emit('logedOutUser',logedInName);

                   
     /////// remove the ids who loged out 

  					var l=usersID.length;
  					for(var i=0 ; i<l ; i++ ){

  						var  splitUsersId= usersID[i].split('|');
  						if(socket.id== splitUsersId[1]){
  							var removeIndex = i ;
  							break;
  						}
  					}
  					usersID.splice(removeIndex,1);


    //// remove the users  who loged out
  					var l2 = logedInUserArray.length;
  					for(var i=0 ; i<l2 ; i++ ){

  						
  						if(splitUsersId[0]== logedInUserArray[i]){
  							var removeIndex = i ;
  							break;
  						}
  					}

                    logedInUserArray.splice(removeIndex,1);

  					console.log(" who logedout " +  splitUsersId[0]);
  				});
           

			});






/*
////// mongodb 
var mongodb = require('mongodb');
var MongoClient = require('mongodb').MongoClient
var mongodbUrl = 'mongodb://localhost:27017/db1';


MongoClient.connect(mongodbUrl, function (err, db) {

  	if (err) throw err

	var mycollection =  db.collection('user1')

   	app.get('/data',function(req,res){

		var result = mycollection.find().sort({name:1}).toArray(function (err, result) {
		if (err) throw err
		console.log(result[0].name)
		res.render("mongodata.ejs",{myData:result});	
		});
	});


    //  at home page 
	app.get("/",function(req,res){
 		res.send("hi ^_^ ")
 	});


    // at login page 
	app.get("/login",function(req,res){
		res.sendFile(path.join(__dirname+'/login.html'));
 	});


	app.post("/login",function(req,res){

    /// login data
    var inputLoginEmail = req.body.loginEmail ;
    var inputLoginPass = req.body.loginPass ;

    /// signup data 
    var inputSignupName = req.body.signName ;
    var inputSignupAge = req.body.signAge; 
    var inputSignupEmail = req.body.signEmail;
    var inputSignupPass = req.body.signPass; 
    var inputSignupType = req.body.signType;

	if(req.body.login == "log"){

		db.collection('user1').find({email: inputLoginEmail}).toArray( function(err,result){
       	if (err) throw err ;
       	console.log(result[0].name);

       	if(inputLoginPass == result[0].password){
        	var result = mycollection.find().sort({name:1}).toArray(function (err, result) {
			if (err) throw err
			console.log(result[2].name)
		 	res.render("mongodata.ejs",{myData:result});	
			});
       	}

       	else  
       	 	res.send("error");
       }); 
	}

    else if   (req.body.signup == "sign") {
    	res.send(" hi post sign ");
		var insertData = { name : inputSignupName ,age : inputSignupAge ,email : inputSignupEmail ,
						password : inputSignupPass , type : inputSignupType } ;

		//// insert the data 
		db.collection("user1").insertOne(insertData , function (err,result){
			if (err) throw err ;
			console.log ("data inserted ");
			
		}); 

    }; 

});
  	//mycollection.find().toArray(function (err, result) {
    //	if (err) throw err
    //	console.log(result)
    //})
});

*/

http.listen(8080,function(){
	console.log("server now run on port 8080 ^_^ ");
});