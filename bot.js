
const Discord = require('discord.js');

// Create an instance of a Discord client
const client = new Discord.Client();
var sad_ch;
var sad_role;
var zgloszenia_ch;
/**
 * The ready event is vital, it means that only _after_ this will your bot start reacting to information
 * received from Discord
 */
client.on('ready', () => {
  console.log('I am ready!');
  client.user.setActivity('Świat Pingwinów', { type: 'WATCHING' });
});
client.on('messageReactionAdd', function(reaction, user){
  if(reaction.emoji == '📞' || reaction.emoji == '⛏')
  {
    if(reaction.message.author.id == user.id)
    {
      reaction.remove(user);
      return;
    }
    else if(user.id == "651052638900846613")
    {return;}
     if(reaction.emoji == '📞')
     {
       var tmp;
       zgloszenia_ch.send("wysłano zgłoszenie wiadomości urzytkownika "+reaction.message.author.tag+" o treści '"+reaction.message.content+"' id urzytkownika: "+reaction.message.author.id);
       zgloszenia_ch.send( "przez urzytkownika "+user.tag+" o id "+user.id);
       zgloszenia_ch.send("wysłana o '" + reaction.message.createdAt+"' nazwa kanału wiadomości '"+reaction.message.channel.name+"' id kanału '"+reaction.message.channel.id + "' id wiadomości '" + reaction.message.id);
       zgloszenia_ch.send("# " + user.id);
       reaction.remove(user);
     }
      
  }
});
// Create an event listener for messages
client.on('message', message => {
  // If the message is "ping"
    if(message.author.id == "651052638900846613")
  {
    if(message.content.startsWith('#'))
       {
        message.react('🎵');
        message.react('🅱');
        message.react('🦶');
       }
      }
  if(message.member.highestRole.position < message.guild.me.highestRole.position)
  {
    message.react('⛏');
    message.react('📞');
  }
  if (message.content === '!setsad') {
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
    if (message.content === '!setzg') {
     if(message.member.highestRole.position >= message.guild.me.highestRole.position)
     {
      zgloszenia_ch = message.channel;
      message.reply("ustawiono");
      message.delete();
     }
    else
    {
      message.delete();
      message.reply("nie masz uprawnień do użycia tego");
    }

  }
    if (message.content.startsWith('!setsr')) {
     if(message.member.highestRole.position >= message.guild.me.highestRole.position)
     {
       const role = message.mentions.roles.first();
    // If we have a user mentioned
    if (role) {
      sad_role = role;
      message.reply("ustawiono");
      message.delete();
    } else {
      message.reply('nie podałeś roli');
      message.delete();
    }
     }
    else
    {
      message.delete();
      message.reply("nie masz uprawnień do użycia tego");
    }

  }
  if (message.content === '!create') {
    message.guild.channels.create("test",{type:'DM'});
  }
});

client.login(process.env.BOT_TOKEN);
