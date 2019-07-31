const Discord = require('discord.js');
var auth = require('./auth.json');



// Initialize Discord Bot
const client = new Discord.Client();

//initialize constants
const prefix = "/";
const dbtimeDif = 4;

//bot is logged in
client.on("ready", () => {
 console.log("Buller is online");
});


//todo add more commands
client.on("message", msg => {
 if(msg.content.startsWith(prefix+"dbtime")){
	var momodate = new Date();
	momodate.setHours(momodate.getHours()-dbtimeDif);
	var dbtime = "dbtime is currently: "+ momodate.toLocaleTimeString();
	msg.channel.send(dbtime);
 }
});

client.login(auth.token);