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
  📌 **Genel Yardım :**

🔔   **o!eğlence : Eğlence Menüsü**

🔔   **o!ytyardım : Yetkililerin kullanabileceği Yetkili Yarım Menüsü**

🔔   **o!sicil : Daha önce mute, jail v.b. olaylarınızı sebebleri ile gösterir. Örnek : o!sicil @üye**

🔔   **o!say : Sunucuda kaç kişi olduğunu gösterir .**

🔔   **o!sesli : Sunucudaki ses odalarında kaç kişi olduğunu gösterir.**

🔔   **o!nerede : Belirttiğiniz üyenin hangi ses odasında olduğunu gösterir. Örnek :o!nerede @üye**

🔔   **o!çek : Belirttiğiniz üyeyi bulunduğunuz ses odasına çeker. Örnek : o!çek @üye**

🔔   **o!git : Belirttiğiniz üyenin yanına götürür.**



`)

.setFooter("Yorgun ♥ Umursamaz")
.setTimestamp()
message.channel.send(egsse)
};

exports.conf = {
    name: "yardım",
    aliases: [],
    permLevel: 0
};