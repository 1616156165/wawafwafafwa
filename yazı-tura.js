const Discord = require('discord.js');

var hd = [
    "Tura",
    "Yazı"
];

module.exports.run = async (bot, message, args) => {

  message.channel.send(message.author.toString() + " Para Döndü: " + (hd[Math.floor(Math.random() * hd.length)]));
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
    
};
exports.conf = {
    name: "yazı-tura",
    aliases: [],
    permLevel: 0
};