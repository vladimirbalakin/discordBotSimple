const botToken = require("./config.json").botToken;
const Discord = require('discord.js');
const bot = new Discord.Client();
bot.on('message', msg => {
  /*if (msg.content === 'ping') {
    msg.channel.send('pong');
  } else if (msg.content === 'pong') {
    msg.channel.send('ping');
  }*/
  if (msg.content === 'pong') {
    msg.channel.send('ping');
  }
  if (msg.content === 'spam') {
    msg.channel.send('!yes');
  }
});
bot.login(botToken)