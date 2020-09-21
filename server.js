// Create some constant values
const discord = require('discord.js');
const bot = new discord.Client();

// Grab the bot token from the .env file
const botToken = process.env.BOT_TOKEN;

// Bot startup
bot.on('ready', () => {
  
  // What is the bot currently playing?
  bot.user.setActivity('.help');
  
  console.log('Hello World! Logged in as ' + (bot.user.tag));
}); 


bot.on('message', msg => {
  
  // Prefix for commands

  const prefix = ".";

  // Keeps the bot from triggering commands from other bots
  if (msg.author.bot) return;
  
  // If a piece of text does not start with the prefix just ignore
  if (!msg.content.startsWith(prefix)) return;

  // Splits the command from the prefix
  const args = msg.content.slice(prefix.length).trim().split(/ +/g);
  
  // Turns any upper case letters to lower case
  const command = args.shift().toLowerCase();
  
  // Basic Command to check the ping of your bot
  if (command === "ping") {
    msg.channel.send(`Pong! my Ping is ` + bot.ping + `ms`);
  }
  
  // Command for help
   if (command === 'help') {
       msg.channel.send(`commands!
help --this comamnd
invitebot --invite the bot
ping -- see bots ping`)
      }
  // Command to invite the bot
   if (command === 'invitebot') {
       msg.channel.send(`Invite Me! https://discord.com/oauth2/authorize?client_id=757469101223444520&scope=bot&permissions=8
`)
      }
}); // End of bot.on('message')

// Since there is no actual preview for the bot (unless you add your own website code)
// It will be an error or continious refresh loop, consider this part of the code that keeps the bot alive
// Though you will still need an uptime robot in order to truely keep the bot alive
// This is NOT my code, the code is directly from this page: https://anidiotsguide_old.gitbooks.io/discord-js-bot-guide/content/other-guides/hosting-on-glitchcom.html
const http = require('http');
const express = require('express');
const app = express();
app.get("/", (request, response) => {
  console.log(Date.now() + " Ping Received");
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);

// Bot token
// Located in .env file
bot.login(botToken);