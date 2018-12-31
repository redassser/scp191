var Discord = require("discord.js");
var Enmap = require('enmap');
var EnmapMongo = require("enmap-mongo");
var client = new Discord.Client();
var prefix = "[]";
var request = require('request');
var cheerio = require('cheerio');
client.sets = new Enmap({ provider: new EnmapMongo({
  name: `shibaset`,
  dbName: `commands`,
  url: process.env.MONGO
})
})
client.on("ready", () => {
  console.log("Prepared for war");
  client.user.setActivity("[]ss");
});

client.on("message", (message) => {
  var args = message.content.slice(prefix.length).trim().split(/ +/g);
  var command = args.shift().toLowerCase();
  var argu = args.join(" ");
if (!message.content.startsWith(prefix)) return
if (command === "ping") {
  if (message.member.roles.has("473398252889178113")) {
    message.member.removeRole("473398252889178113");
    message.channel.send(message.author+` will no longer be pinged for announcements.`);
    message.delete();
  } else {
    message.member.addRole("473398252889178113");
    message.channel.send(message.author+` will now be pinged for announcements!`);
    message.delete();
  }
}
if (command === "set") {
  if (!message.member.permissions.has('ADMINISTRATOR')) {message.channel.send("Admin only!");return}
  if (args.length != 2) {message.channel.send("``[]set [ip] [port]``");return}
  client.sets.set("server1", [ args[0] , args[1] ])
  message.channel.send("Server has been changed")
}
  if (command === "ss"){
  request('https://api.scpslgame.com/lobbylist.php?format=json', function(err, resp, html) {
      if (!err){
        var json = JSON.parse(html);
        if ("error" in json) {
          console.log("Someone help me!");
        } else {
          var serv1 = client.sets.get("server1"); 
		
          let ser1 = json.find(o => o.ip === serv1[0] && o.port === serv1[1])
          if(!ser1) {var title1 = "[OFFLINE]"; var player1 = "N/A"; var color1 = "#e51c1c"} 
          else {var title1 = ""; var player1 = ser1.players; var color1 = "#1de535"}
           
	  let serverstatus1 = new Discord.RichEmbed()
	    .setTitle("JackInTheBox community "+title1)
	    .setAuthor("SCP Secret Laboratory","https://upload.wikimedia.org/wikipedia/commons/e/ec/SCP_Foundation_%28emblem%29.svg")
	    .addField("IP:",serv1[0],true)
	    .addField("PORT:",serv1[1],true)
	    .addField("PLAYERS:",player1,true)
	    .setColor(color1)
          message.channel.send(serverstatus1)
	
          
        } 
      }  
    });
  }
});
client.login(process.env.BOT_TOKEN).catch(console.error);
