
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
client.on("message", (message) => {
      // Assuming we mention someone in the message, this will return the user
    if (Words.some(word => message.content.includes(word))) {
     message.author.send("Nie używaj słów niedozwolonych na " + message.guild.name);
     message.delete();
     tmp = message.guild.me.highestRole.position;
     tmp1 = message.author
     if (tmp <= message.guild.tmp1.highestRole.position)
     {
      message.reply("nie udało mi się dać mu bana " + message.author.tag + "ale niech moje ostrzeżenie będzie dla niego nauczką");
     }
     else
     {
         message.guild.ban(message.author);
         message.reply("dostaniesz bana " + message.author.tag);
     }


 }
});
client.on("messageReactionAdd", (reaction) => {
 console.log("wykryto reakcje");
});

client.login(process.env.BOT_TOKEN);
