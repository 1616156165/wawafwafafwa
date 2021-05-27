const Discord = require("discord.js");
const db = require('quick.db');
const ayarlar = require('../index.js');

var prefix = ayarlar.prefix;

module.exports.run= async(client, message, args) => {

let egsse = new Discord.MessageEmbed()
.setTitle(client.user.username+" Komut Yardım Menüsü")
.setColor("RANDOM")
.setThumbnail(client.user.avatarURL())
.setDescription(`
📌 **Ocean Eğlence Paneli :**

🎯 **o!aşk : Belirttiğiniz kişiyle sevgi durumunuzu belirtir . Örnek : o!aşk @üye**

🎯 **o!afk : Afk olduğnuzu belirtir**

🎯 **o!avatar , o!pp , o!av : Profil fotoğrafınızı gösterir .**

🎯 **o!öp : Belirttiğiniz kişiyi öpmer atar. Örnek : o!öp @üye**

🎯 **o!tokat : Belirttiğiniz kişiyi tokat atar. Örnek : o!tokat @üye**

🎯 **o!sarıl : Belirttiğiniz kişiyi sarılır. Örnek : o!sarıl @üye**

🎯 **o!kaçcm : Kendinizin cm'ini ölçer. Örnek : o!kaçcm @üye**

🎯 **o!yazı-tura : Arkadaşınızla oynuyabileceğiniz basit bir oyun.**


`)

.setFooter("Yorgun ♥ Umursamaz")
.setTimestamp()
message.channel.send(egsse)
};

exports.conf = {
    name: "eğlence",
    aliases: [],
    permLevel: 0
};