

///document.write("jjjj")


console.log("this frisrt node ");

function hallo() {
    
    //innerHTML("hallooooo");
    
}


function sayhallo1() {
    
    var value = document.getElementById("in").value;
    document.getElementById("myid").innerHTML = "hallo " + value;
}


function sayhallo() {
    
    var value;
    value = prompt("enter your name ");
    document.getElementById("myid").innerHTML = "hallo " + value;
    
    
    
}


function hide() {
    document.getElementById("in").placeholder = "";
}


function rewrite() {
   
    document.getElementById("in").placeholder = "write";
}




var  fun = function(){
    document.write("jhhhhhhhh");
    
};

fun();








document.getElementById("p").innerHTML = "hhallo";

function add(x, y) {
    document.write(x + y); 
}

add(10, 3);


var ob ={name:"mostafa", age :23};
document.write(ob.name,ob.age);

var x="jjj";
var x=920.876;
var arr=[2,455,7,"eeeeeeeee",8,9]


document.write(x)
document.write(arr[3])
console.log(typeof(x))

var i;


function changeRed(){
    
    
    setTimeout(delayout,1000);
}



function delayout(){
    
    
    document.getElementById('img').src='./img/red.png';
}



    
   
document.write(Date());


///////////////// strings 


document.write("<br>");



var string="JavaScript strings are used for storing date";

document.writeln(string);

document.write(" <br> the length = " + string.length);

document.write(" <br> the index of \"for\" = "  , string.indexOf("for"));
//avaScript counts positions from zero.
//0 is the first position in a string, 1 is the second, 2 is the third 

document.write(" <br> the search of \"for\" = "  , string.search("for"));










   
