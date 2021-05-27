const Discord = require('discord.js');
const db = require('quick.db');

exports.run = async(client, message, args) => {
    let kanal = message.mentions.channels.first()
    const hedef = args[1]

    if(!kanal) return message.channel.send(`Lütfen bir kanal etikeylin.`)
    if(!hedef) return message.channel.send('Hedef girin')
    if(isNaN(hedef)) return message.channel.send("Hedef girin")
    if(message.guild.memberCount > hedef) return message.channel.send("Hedefiniz sunucu saysından küçük olamaz.")

    db.set(`SKanal_${message.guild.id}`, kanal.id)
    db.set(`hedef_${message.guild.id}`, hedef)

    message.channel.send(`kanal ${kanal} Olarka ayarlandı. Kişi ise ${hedef} Olarak ayalrlandı!`)
};
exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: [''],
    permLevel: 2
    
};
exports.conf = {
    name: "sayaç",
    aliases: [],
    permLevel: 0
};