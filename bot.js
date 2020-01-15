var tmp
var tmp2
const Discord = require('discord.js');

// Create an instance of a Discord client
const client = new Discord.Client();

/**
 * The ready event is vital, it means that only _after_ this will your bot start reacting to information
 * received from Discord
 */
client.on('ready', () => {
  console.log('I am ready!');
  client.user.setGame("created for nati server:)");
});

// Create an event listener for messages
client.on('message', message => {
  // If the message is "ping"
  if (message.content === 'ping') {
    // Send "pong" to the same channel
    message.channel.send('pong');
  }
   if (message.content.startsWith('!setgame')) {
     tmp = message.content.split(' ');
     for(i=1;i<tmp.lenght;i++)
     {
       tmp2 = tmp2+tmp[i];
     }
     client.setGame(tmp2);
   
   }
});

client.login(process.env.BOT_TOKEN);
