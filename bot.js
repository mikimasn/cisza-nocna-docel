
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
client.on("ready", () => {
 console.log("I am ready!");
});
client.on("message", (message) => {
      // Assuming we mention someone in the message, this will return the user
    if (Words.some(word => message.content.includes(word))) {
     message.author.send("Nie używaj słów niedozwolonych na" + message.guild.name);
     message.delete();
     if(message.guild.ban(message.author))
     {
      message.TextChannel.send("dostał bana" + message.author.tag);
     }
     else
     {
      message.TextChannel.send("nie udało mi się dać mu bana" + message.author.tag + "ale niech moje ostrzeżenie będzie dla niego nauczką");
     }
     }
 });

client.login(process.env.BOT_TOKEN);
