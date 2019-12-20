
const Discord = require("discord.js");
const Words = ["elo","Elo","Eluwina", "eluwina"];
const client = new Discord.Client();
const users = [];
var dates = Date();
var timeh = dates;
var timem = dates;
const times = dates;
var timessplit;
var howerssplit;
var czy = false;
var czeste = false;
var role;
var tmp;
var tmp1;
client.on("ready", () => {
 console.log("I am ready!");
});
client.on("messageReactionAdd", (reaction) => {
 console.log("wykryłem reakcje");
});
client.on("message", (message) => {
     message.react(657580383654772775);
      // Assuming we mention someone in the message, this will return the user
    if (Words.some(word => message.content.includes(word))) {
     message.author.send("Nie używaj słów niedozwolonych na " + message.guild.name);
     message.delete();
     tmp = message.guild.me.highestRole.position;
     if (tmp <= message.member.highestRole.position)
     {
      message.reply("nie udało mi się dać mu bana ale niech moje ostrzeżenie będzie dla ciebie nauczką");
     }
     else
     {
         message.guild.ban(message.author);
         message.reply("dostał bana");
     }


 }
});


client.login(process.env.BOT_TOKEN);
