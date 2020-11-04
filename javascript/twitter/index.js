var Twit = require('twit');
var config = require('./config');


var T = new Twit(config)

T.get('followers/list', { screen_name: 'mostafaelgohry0' },  function (err, data, response) {
   // console.log(data.screen_name)
   var fame = data.statuses ;
   for(var i=0 ; i<90; i++){

   	console.log(fame[i].screen_name);
   }



});