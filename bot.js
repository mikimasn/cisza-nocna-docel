
const Discord = require("discord.js");
const Words = ["elo"];
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
client.on("ready", () => {
 console.log("I am ready!");
}
client.on("message", (message) => {
      // Assuming we mention someone in the message, this will return the user
    if (Words.some(word => message.content.includes(word))) {
 message.reply("dostałeś bana");
 message.author.send("Nie używaj słów niedozwolonych na" + message.guild.name);
 message.delete();
 message.guild.ban(message.author);
 }
   }
  })

client.login(process.env.BOT_TOKEN);
