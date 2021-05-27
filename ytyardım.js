const Discord = require("discord.js");
const db = require('quick.db');
const ayarlar = require('../index.js');

var prefix = ayarlar.prefix;

module.exports.run= async(client, message, args) => {

let egsse = new Discord.MessageEmbed()
.setTitle(client.user.username+" Yetkili Komut Yardım Menüsü")
.setColor("RANDOM")
.setThumbnail(client.user.avatarURL())
.setDescription(`
📌 **Yetkili Yardım :**


🔔  **o!rolver : Belirttiğiniz üyeye rol verir . Örnek : o!rol @üye @verilcekrol**

🔔  **o!rolal : Belirttiğiniz üyenin rolünü alır . Örnek : o!rol @üye @alıncakrol**

🔔  **o!sicil sil : Daha önce yaptığınız ceza v.b. olayları sıfırlar . Örnek : o!sicil sil @üye**

🔔   **o!info : Yetkili kişinin , Daha önce mute, jail v.b. olaylarınızı sebebleri ile gösterir. Örnek : o!info @üye**

🔔   **o!kilit : Belirtilen kanalı kilitler . Örnek : o!kilit #kanal**

🔔  **o!vmute : Sesteki belirttiğiniz üyeyi belirttiğiniz süre boyu susturur. Örnek : o!vmute @üye 1m,5m v.b.**

🔔   **o!yavaş mod : Belirtilen kanalı süreli yapar . Örnek : o!yavaş mod 1**

🔔  **o!unvmute : Eğer ses odasında mute yediyseniz vmute rolünü kaldırır. Örnek : o!unvmute @üye**

🔔  **o!mute : Belirttiğiniz üyeye belirttiğiniz süre boyunca yazı kanallarında susturur**

🔔  **o!unmute : Eğer yazı kanallarında susturulduysanız muted rolünü kaldırır. o!unmute @üye**

🔔  **o!jaıl : Belirtiğiniz üyeye jail rolü verir . Örnek : o!jail @üye**

🔔  **o!unjail : Eğer jail aldıysanız jail'inizi kaldırır. Örnek: o!unjail @üye**

🔔  **o!ıdban : Belirttiğiniz üyennin ıdsi ile sunucudan banlayabilirsiniz . Örnek : o!ıdban @üyeninıdsi**

🔔  **o!ban : Belirttiğiniz üyeyi sunucudan atar. : Örnek : o!ban @üye**

🔔  **o!unban : Eğer ban yediyseniz banınızı kaldırır. Örnek : o!unban @üyenin ıdsi**

🔔  **o!temizle : Belirttiğiniz sayı kadar kanaldaki mesajları siler Örnek : o!temizle 100**

🔔  **o!sayaç : Sunucuya giren kişileri belirtir.**

🔔  **o!yetkili : Komutu sadece kurucular kullana bilir.**

`)

.setFooter("Yorgun ♥ Umursamaz")
.setTimestamp()
message.channel.send(egsse)
};

exports.conf = {
    name: "ytyardım",
    aliases: [],
    permLevel: 0
};