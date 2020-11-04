
/// source tutorialspoint 

// Import events module
var events = require('events');


// Create an eventEmitter object
var eventEmitter = new events.EventEmitter();


/*

Following is the syntax to bind an event handler with an event −
// Bind event and event  handler as follows
eventEmitter.on('eventName', eventHandler);


We can fire an event programmatically as follows −
// Fire an event 
eventEmitter.emit('eventName');


*/





// Create an event handler as follows
var connectHandler = function connected() {
   console.log('connection succesful.');
  
   // Fire the data_received event 
   eventEmitter.emit('data_received');
}

// Bind the connection event with the handler
eventEmitter.on('connection', connectHandler);
 
// Bind the data_received event with the anonymous function
eventEmitter.on('data_received', function(){
   console.log('data received succesfully.');
});

// Fire the connection event 
eventEmitter.emit('connection');

console.log("Program Ended.");