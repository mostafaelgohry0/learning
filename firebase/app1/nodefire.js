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




var admin = require("firebase-admin");
var firebase = require("firebase");
var serviceAccount = require("./key/app1-64f9b-firebase-adminsdk-7mdd2-0ec5747a86.json");



admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://app1-64f9b.firebaseio.com/"
});





  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyC6Xa90ohc76x7XcMdXx2iy59cJBq-pECU",
    authDomain: "app1-64f9b.firebaseapp.com",
    databaseURL: "https://app1-64f9b.firebaseio.com",
    projectId: "app1-64f9b",
    storageBucket: "app1-64f9b.appspot.com",
    messagingSenderId: "53128949690"
  };
  firebase.initializeApp(config);

  
  
  
  
  


app.get('/',function(req,res){
    
 res.sendFile(path.join(__dirname+'/login.html'));
    
 
 var personRef = firebase.database().ref("person2/p2");

personRef.orderByChild("name").on("child_added", function(data) {
   //console.log(data.val().age);
   console.log(data.val().name);
  
});
 
        
    
});






app.post('/',function(req,res){
     
      var frist_name = req.body.frist_name;
      var last_name = req.body.last_name;
      var email = req.body.email ;
      var pass = req.body.password ;
      var birthday =req.body.birth_day;
      var type = req.body.type;
    
       /// var datetime = new Date();
    
   /// var d1 = new Date();

    //var d2 = new Date(dateString);

    //var d3 = new Date(jsonDate);

    //var d4 = new Date(year, month, day);

    //var d5 = new Date(year, month, day, hour, minute, second, millisecond);
    
    
  ///  console.log(d1)
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
    
        
        
        
        
 /*       
        
  
  
var data ={name:frist_name, email : email ,age :pass};

var userId="p1";

var userRef=firebase.database().ref("person2/-Kp7A5A9BErQlEuwNrpv");


userRef.update(data)
.then (function (){
    
    console.log("data inserted ");
    
})

.catch (function(error){
    
    console.log(error);

});


*/
 
 res.send(" done ");
    
});







app.listen(8080);

console.log("Running at Port 8080");





  