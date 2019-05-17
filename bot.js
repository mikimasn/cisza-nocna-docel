
const Discord = require("discord.js");
const Words = ["fak","kurwa","shit"];
const client = new Discord.Client();
const users = [];
var dates = Date();
var timeh = dates;
var timem = dates;
const times = dates;
var timessplit;
var howerssplit
client.on("ready", () => {
 console.log("I am ready!");
});
client.on("message", (message) => { dates = Date();
                                   console.log(dates);
                                   timessplit = dates.split(" ");
                                   howerssplit = timessplit[4].split(":");
                                   console.log(timessplit[4]);
                                   console.log(howerssplit[0]);
                                   console.log(howerssplit[1]);
                                   console.log(howerssplit[2]);
                                   if(howerssplit[0] >= 22 || howerssplit[0] < 6)
                                       {
                                           if (message.author.tag == client.user.tag)
                                               {
                                                   console.log("not");
                                               }
                                           else{
                                                    message.delete();
                                                    message.author.send("przypominam o ciszy nocnej :)");
                                           }
                                       }

                                  })
client.login(process.env.BOT_TOKEN);
