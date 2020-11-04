


//jvar firebase = require("firebase/app");
//require("firebase/auth");
//require("firebase/database");


///write data 

/*
var  personRef = firebase.database().ref("person2/");
personRef.set({
    p1: {number: 1,age: 30},
	
   p2: { number: 2, age: 20}
});

*/
//read data 
/*

var ref = firebase.database().ref();

ref.on("value", function(snapshot) {
   console.log(snapshot.val());
}, function (error) {
   console.log("Error: " + error.code);
});
*/

//set date  


/*
var data ={name:"mostafa7", email : "bla@kf.com",age :23};

var userId=667;

var userRef=firebase.database().ref("users/"+userId);
userRef.set(data);

*/


  





/*
// Points to the root reference
var storageRef = firebase.storage().ref();

// Points to 'images'
var imagesRef = storageRef.child('images');


// Points to 'images/space.jpg'
// Note that you can use variables to create child values
var fileName  = document.getElementById("picture");
var spaceRef = imagesRef.child(fileName);

// File path is 'images/space.jpg'
var path = spaceRef.fullPath

// File name is 'space.jpg'
var name = spaceRef.name

// Points to 'images'
var imagesRef = spaceRef.parent;


console.log(path);
console.log(name);
console.log(imagesRef);





*/






//////////////////////////////////// test extreact data   //////////////////

 var x ;
var ref = firebase.database().ref("users/");
//var userChRef= ref.child("users");
var userChRef= ref.child("personalData");

console.log("done");



ref.on("child_added", function(data) {
  x=  data.val().personalData.name;
  
  console.log(x);
});

