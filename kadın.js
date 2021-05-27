const anan = require("discord.js");

exports.run = async (client, message, args) => {

let yetkili = '831852054490120233'//yetkili rol
let ver = '831852753177411594'//verilecek rol 
let al = '831853344825147415'//alınacak rol 
let tag = 'の'//tagın

if(!message.member.roles.cache.has(yetkili))
if(!message.member.hasPermission("ADMINISTRATOR"))
return message.channel.send(`Bu Komutu Kullanmak İçin ${yetkili} Yetkisine Sahip Olman Lazım!`)
let member = message.mentions.members.first()
  let isim = args.slice(1).join(" ")
  if (!member) return message.channel.send('Kimi Kayıt Edecem Etiketle')
  if (!isim) return message.channel.send('İsim veya Yaş Yazmadan Maalesef :c')

 setTimeout(function(){
  member.setNickname(`${tag} | ${isim}`)
  },2000)
  setTimeout(function(){
  member.roles.add(ver)
  },3000)
  setTimeout(function(){
  member.roles.remove(al)
  },4000)
  
 
 let embed = new anan.MessageEmbed()
  .setColor('0000ff')
  .setDescription(` Kayıt işlemi Başarılı 

 **Kayıt eden yetkili :** ${message.author.username} 

**Kayıt edilen kullanıcı :** ${tag} | ${isim}  

**Kayıt işleminde verilen rol :** <@&${ver}> 

**Kayıt işleminde alınan rol :** <@&${al}>`)
  
.setImage("https://cdn.discordapp.com/attachments/825022837407875082/834009894503186432/standard.gif")
message.channel.send(embed)
};

exports.conf = {
 enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
    
};
exports.conf = {
    name: "k",
    aliases: [],
    permLevel: 0
};