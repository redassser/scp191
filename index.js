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
  if (args.length != 3) {message.channel.send("``[]set [1,2, or 3] [ip] [port]``");return}
  switch (args[0]) {
    case 1:
      client.sets.set("server1", [ args[1] , args[2] ])
      break;
    case 2:
      client.sets.set("server2", [ args[1] , args[2] ])
      break;
    case 3:
      client.sets.set("server3", [ args[1] , args[2] ]) 
      break;
    default:
      message.channel.send("``[]set [1,2, or 3] [ip] [port]``")
      return;
  }
}
  if (command === "ss"){
  request('https://api.scpslgame.com/lobbylist.php?format=json', function(err, resp, html) {
      if (!err){
        var json = JSON.parse(html);
        if ("error" in json) {
          console.log("Someone help me!");
        } else {
          
          let ser1 = json.find(o => o.ip === "149.202.87.101" && o.port === '7790')
          if(!ser1) {var title1 = "[OFFLINE]"; var player1 = "N/A"; var color1 = "#e51c1c"} 
          else {var title1 = ""; var player1 = ser1.players; var color1 = "#1de535"}
           
          let ser2 = json.find(o => o.ip === "149.202.87.101" && o.port === '7778')
          if(!ser2) {var title2 = "[OFFLINE]"; var player2 = "N/A"; var color2 = "#e51c1c"} 
          else {var title2 = ""; var player2 = ser2.players; var color2 = "#1de535"}
           
          let ser3 = json.find(o => o.ip === "149.202.87.101" && o.port === '7779')
          if(!ser3) {var title3 = "[OFFLINE]"; var player3 = "N/A"; var color3 = "#e51c1c"} 
          else {var title3 = ""; var player3 = ser3.players; var color3 = "#1de535"}
		
	  let serverstatus1 = new Discord.RichEmbed()
	    .setTitle("Shiba community #1 "+title1)
	    .setAuthor("SCP Secret Laboratory","https://upload.wikimedia.org/wikipedia/commons/e/ec/SCP_Foundation_%28emblem%29.svg")
	    .addField("IP:","scpmemers.xyz",true)
	    .addField("PORT:","7790",true)
	    .addField("PLAYERS:",player1,true)
	    .setColor(color1)
          message.channel.send(serverstatus1)
	  let serverstatus2 = new Discord.RichEmbed()
	    .setTitle("Shiba community #2 "+title2)
	    .setAuthor("SCP Secret Laboratory","https://upload.wikimedia.org/wikipedia/commons/e/ec/SCP_Foundation_%28emblem%29.svg")
	    .addField("IP:","scpmemers.xyz",true)
	    .addField("PORT:","7778",true)
	    .addField("PLAYERS:",player2,true)
	    .setColor(color2)
          message.channel.send(serverstatus2)
	  let serverstatus3 = new Discord.RichEmbed()
	    .setTitle("Shiba community #3 "+title3)
	    .setAuthor("SCP Secret Laboratory","https://upload.wikimedia.org/wikipedia/commons/e/ec/SCP_Foundation_%28emblem%29.svg")
	    .addField("IP:","scpmemers.xyz",true)
	    .addField("PORT:","7779",true)
	    .addField("PLAYERS:",player3,true)
	    .setColor(color3)
          message.channel.send(serverstatus3)
        } 
      }  
    });
  }
});
client.login(process.env.BOT_TOKEN);
