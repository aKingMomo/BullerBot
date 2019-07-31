var Discord = require('discord.io');
var auth = require('./auth.json');



// Initialize Discord Bot
var client = new Discord.Client({
   token: auth.token,
   autorun: true
});

//initialize constants
const prefix = "/";
const dbtimeDif = 4;

//bot is logged in
client.on("ready", () => {
 console.log("Buller is online");
});


//todo add more commands
client.on("message", (user, userID, channelID, message, evt) => {
 if(message.startsWith(prefix+"dbtime")){
	var momodate = new Date();
	momodate.setHours(momodate.getHours()-dbtimeDif);
	var dbtime = "dbtime is currently: "+ momodate.toLocaleTimeString();
	client.sendMessage({to: channelID, message: dbtime});
 }
});