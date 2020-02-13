
const Discord = require('discord.js');

// Create an instance of a Discord client
const client = new Discord.Client();
var sad_ch;
/**
 * The ready event is vital, it means that only _after_ this will your bot start reacting to information
 * received from Discord
 */
client.on('ready', () => {
  console.log('I am ready!');
  client.user.setActivity('Serwer Maksa', { type: 'WATCHING' });
});
client.on('messageReactionAdd', function(reaction, user){
  if(reaction.emoji == '📞' || reaction.emoji == '⛏')
  {
    if(reaction.message.author.id == user.id)
    {
      reaction.remove(user);
      return;
    }
    
  }
});
// Create an event listener for messages
client.on('message', message => {
  // If the message is "ping"

  if(message.member.highestRole.position < message.guild.me.highestRole.position)
  {
    message.react('⛏');
    message.react('📞');
  }
  if (message.content === '!set') {
     if(message.member.highestRole.position >= message.guild.me.highestRole.position)
     {
      sad_ch = message.channel;
      message.reply("ustawiono");
      message.delete();
     }
    else
    {
      message.delete();
      message.reply("nie masz uprawnień do użycia tego");
    }

  }
});

client.login(process.env.BOT_TOKEN);
