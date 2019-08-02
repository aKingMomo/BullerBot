const Discord = require('discord.js');
var auth = require('./auth.json');
var tclink = auth.teamchat;

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
	//hidden
 if(msg.channel.type == "dm"){
	if(msg.author.id === auth.momoid){
		msg.author.send("Hi Mom!");
	}
 }
 //dbtime
 if(msg.content.startsWith(prefix+"dbtime")){
	 let allowedRole = msg.guild.roles.find(role => role.name === "Team Dawnbreakers");
	 if(msg.member.roles.has(allowedRole.id)){
		 var momodate = new Date();
		 momodate.setHours(momodate.getHours()-dbtimeDif);
		 var dbtime = "dbtime is currently: "+ momodate.toLocaleTimeString();
		 msg.channel.send(dbtime);
	 } else {
		 msg.channel.send("Who are you?");
	 }
 }
	//goodnight
 if(msg.content.startsWith(prefix+"goodnight")){
	 if(msg.member.id===auth.momoid){
		 const momobless = client.emojis.find(emoji => emoji.name === "momobless");
		 msg.channel.send(`Good night, mom! ${momobless}`);
		 client.destroy();
	 }else{
		 const momopout = client.emojis.find(emoji => emoji.name === "momopout");
		 msg.channel.send(`You're not my mom! You can't make me! ${momopout}`);
	 }
 }
	//teamchat
if(msg.content.startsWith(prefix+"teamchat")){
	let allowedRole = msg.guild.roles.find(role => role.name === "Team Dawnbreakers");
	 if(msg.member.roles.has(allowedRole.id)){
		 msg.channel.send("Click on this link to join video call team chat: \n"+auth.teamchat);
	 }else{
		 msg.channel.send("Who are you?");
	 }
}
	//matchup
if(msg.content.startsWith(prefix+"matchup")){
	let allowedRole = msg.guild.roles.find(role => role.name === "Team Dawnbreakers");
	if(msg.member.roles.has(allowedRole.id)){
		msg.channel.send("Here's the match up planner: \n"+auth.matchup);
	}else{
		msg.channel.send("Who are you?");
	}
}
	//melaresources
if(msg.content.startsWith(prefix+"melaresources")){
	let allowedRole = msg.guild.roles.find(role => role.name === "Team Dawnbreakers");
	if(msg.member.roles.has(allowedRole.id)){
		msg.channel.send("Here's MelaResources: \n"+auth.mela);
	}else{
		msg.channel.send("Who are you?");
	}
}
 //commands
if(msg.content.startsWith(prefix+"commands")){
	let allowedRole = msg.guild.roles.find(role => role.name === "Team Dawnbreakers");
	if(msg.member.roles.has(allowedRole.id)){
		msg.channel.send("My current commands are: \n /dbtime \n /matchup \n /melaresources \n /teamchat ");
	}else{
		const momosmug = client.emojis.find(emoji => emoji.name === "momosmug");
		msg.channel.send(`Wouldn't you like to know? ${momosmug}`);
	}
}

//ohayou
if(msg.content.startsWith(prefix+"ohayou")){
	if(msg.member.id===auth.dadsid){
		msg.author.send("Ohayou!");
	}
	msg.channel.send("ohayou sekai! good morning world!");
	
}


});

client.login(auth.token);