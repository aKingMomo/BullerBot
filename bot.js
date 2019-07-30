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

//imitating how vlv had forte listen for commands
//todo clean
client.on("message", (user, userID, channelID, message, evt) => {
 if(message.startsWith(prefix+"dbtime")){
	var momodate = new Date();
	momodate.setUTCHours(momodate.getHours()-dbtimeDif);
	var dbtime = "dbtime is currently: "+ momodate.getHours()+ ":"+ momodate.getMinutes();
	client.sendMessage({to: channelID, message: dbtime});
 }
});