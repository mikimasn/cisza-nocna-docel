
const Discord = require('discord.js');

// Create an instance of a Discord client
const client = new Discord.Client();

/**
 * The ready event is vital, it means that only _after_ this will your bot start reacting to information
 * received from Discord
 */
client.on('ready', () => {
  console.log('I am ready!');
  client.user.setActivity('Serwer Maksa', { type: 'WATCHING' });
});
client.on('messageReactionAdd', messageReaction, user =>{
  if(messageReaction.message.author.tag == user.tag)
  {
    messageReaction.remove(user);
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
  
});

client.login(process.env.BOT_TOKEN);
