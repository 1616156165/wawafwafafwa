const tag = require("discord.js")

let tagın = "の"

exports.run = async (client, message) => {

const anan = new tag.MessageEmbed()

.setColor('0000ff')
.setDescription(`**${tagın}** Tagımızı İsminin Herhangi biyere Koyarak Bize Destek Verebilirsin`)

return message.channel.send(anan)

}

exports.conf = {
 enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
    
};
exports.conf = {
    name: "tag",
    aliases: [],
    permLevel: 0
};