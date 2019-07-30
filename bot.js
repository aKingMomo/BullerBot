var Discord = require('discord.io');
var logger = require('winston');
var auth = require('./auth.json');

// Configure logger settings
logger.remove(logger.transports.Console);
logger.add(new logger.transports.Console, {
    colorize: true
});
logger.level = 'debug';

// Initialize Discord Bot
var client = new Discord.Client({
   token: auth.token,
   autorun: true
});

//initialize constants
const prefix = "+";
const dbtimeDif = 4;

//bot is logged in
client.on("ready", () => {
 logger.info('Logged in as: ');
    logger.info(bot.username + ' - (' + bot.id + ')');
});

//imitating how vlv had forte listen for commands
//todo clean
client.on("message", (message) => {
 if(!message.startsWith(prefix)) return;
 if (message.author.bot) return;
 if (message.channel.type !== "text") return;
 else if(message.content.startsWith(prefix + "dbtime"){
  var momodate = new Date();
  var dbtime = "dbtime is currently: " + momodate.getHours()-dbtimeDif + ":" momodate.getMinutes();
  message.channel.send(dbtime);
 }
});