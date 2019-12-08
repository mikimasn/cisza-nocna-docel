
const Discord = require("discord.js");
const Words = ["fak","kurwa","shit"];
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
var userlist;
var usercount;
client.on("ready", () => {
 console.log("I am ready!");
    client.setInterval(function ()
{
     dates = Date();

                                   timessplit = dates.split(" ");
                                   howerssplit = timessplit[4].split(":");
        


                                   if(howerssplit[0] >=20 || howerssplit[0] < 4)
                                       {
                                           if (!czy)
                                               {
                                                   if(czeste)
                                                       {
                                                           role.edit({permissions:0}, "cisza nocna");
                                                           czy = true;
                                                           console.log("set 0");
                                                       }
                                               }
                                       }
                                    else{
                                            if(czy)
                                                {
                                                    if(czeste)
                                                        {
                                                            role.edit({permissions:67584}, "cisza nocna");
                                                            czy = false;
                                                            console.log("set 67584");
                                                        }
                                                }
                                        }
}, 800);

});
client.on("message", (message) => {
      // Assuming we mention someone in the message, this will return the user
   if (message.content.startsWith('!setrole')) {
        const user = message.mentions.roles.first();
        // If we have a user mentioned
        if (user) {
            if(message.author.tag == "pythontest#9241")
                {
                    role = user;
                    czeste = true;
                    czy = true;
                    message.reply("pomyślnie ustawiłem")
                    console.log("pomyślnie ustawiłem");
                }
            else
                {
                    message.reply("nie masz uprawnień")
                }
        } else {
          message.reply('You didn\'t roles');
        }
   }
 if(message.content.startsWith('!generate')){if(message.guild.available){
  userlist = message.guild.members.array();
  usercount = message.guild.memberCount;
  message.reply("zebrałem liste użytkowników");
  message.reply(userlist.lenght);
  for(var ixxyaz=0;ixxyaz<usercount;ixxyaz++){
   if(!userlist[ixxyaz].user.username == null){
    message.reply(userlist[ixxyaz].user.username.ToString());
   }
  }
 }}
  })

client.login(process.env.BOT_TOKEN);
