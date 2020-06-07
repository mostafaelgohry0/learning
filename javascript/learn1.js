
console.log(" test node.js ")


/// use to write
process.stdout.write(" this output in node.js \n  ")
/*
setTimeout(function (){
    
            process.stdout.write("  end \n ");}
    ,1000);
*/


var os =require("os");
console.log(os.hostname())
console.log( os.platform())
console.log( os.arch() )
console.log( os.cpus() )
