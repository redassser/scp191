var Discord = require("discord.js");
var client = new Discord.Client();
var prefix = "[]";
var request = require('request');
var cheerio = require('cheerio');
var fs = require("fs");
client.on("ready", () => {
  console.log("I am ready!");
  client.user.setActivity("[]ss");
});

client.on("message", (message) => {
  var args = message.content.slice(prefix.length).trim().split(/ +/g);
  var command = args.shift().toLowerCase();
  var argu = args.join(" ");
  var data = 0;
  var ip = fs.readFileSync('./ip.json',"utf8" );
  var port1 = fs.readFileSync('./port1.json',"utf8" );
  var port2 = fs.readFileSync('./port2.json',"utf8" );
  var port3 = fs.readFileSync('./port3.json',"utf8" );
if (command === "ping") {
   if (message.member.roles.has("473398252889178113")) {
      message.member.removeRole("473398252889178113");
      message.channel.send(`${message.author} will no longer be pinged for announcements.`);
      message.delete();
    } else {
      message.member.addRole("473398252889178113");
      message.channel.send(`${message.author} will now be pinged for announcements!`);
      message.delete();
}
}
  if (command === "set" && args[0] != "" && message.member.permissions.has('ADMINISTRATOR')) {
    fs.writeFile('./ip.json', `${args[0]}`, (err) => {
  if (err) throw err;
  console.log('The file has been saved! ');
});
  }
  if (command === "set1" && args[0] != "" && message.member.permissions.has('ADMINISTRATOR')) {
    fs.writeFile('./port1.json', `${args[0]}`, (err) => {
  if (err) throw err;
  console.log('The port1 has been saved!');
});
  }
  if (command === "set2" && args[0] != "" && message.member.permissions.has('ADMINISTRATOR')) {
    fs.writeFile('./port2.json', `${args[0]}`, (err) => {
  if (err) throw err;
  console.log('The port2 has been saved!');
});
  }
  if (command === "set3" && args[0] != "" && message.member.permissions.has('ADMINISTRATOR')) {
    fs.writeFile('./port3.json', `${args[0]}`, (err) => {
  if (err) throw err;
  console.log('The port3 has been saved!');
});
  }
  if (command === "ss"){
  request('https://api.scpslgame.com/lobbylist.php?format=json', function(err, resp, html) {
      if (!err){
        var json = JSON.parse(html);
        if ("error" in json) {
          console.log("Someone help me!");
        } else {
          
          let ser1 = json.find(o => o.ip === "149.202.87.101" && o.port === '7790')
          if(!ser1) {var title1 = "[OFFLINE]"; var player1 = "N/A"; var color1 = "#1de535"} 
          else {var title1 = ""; var player1 = ser1.players; var color1 = "#e51c1c"}
           
          let ser2 = json.find(o => o.ip === "149.202.87.101" && o.port === '7778')
          if(!ser2) {var title2 = "[OFFLINE]"; var player2 = "N/A"; var color2 = "#1de535"} 
          else {var title2 = ""; var player2 = ser2.players; var color2 = "#e51c1c"}
           
          let ser3 = json.find(o => o.ip === "149.202.87.101" && o.port === '7779')
          if(!ser3) {var title3 = "[OFFLINE]"; var player3 = "N/A"; var color3 = "#1de535"} 
          else {var title3 = ""; var player3 = ser3.players; var color3 = "#e51c1c"}
		
	  let serverstatus1 = new Discord.RichEmbed()
	    .setTitle("Shiba community #1 "+title1)
	    .setAuthor("SCP Secret Laboratory","http://scp-sl.wdfiles.com/local--files/nav:side/scp-sl-logo.png")
	    .addField("IP:","scpmemers.xyz",true)
	    .addField("PORT:","7790",true)
	    .addField("PLAYERS:",player1,true)
	    .setColor(color1)
          message.channel.send(serverstatus1)
	  let serverstatus2 = new Discord.RichEmbed()
	    .setTitle("Shiba community #2 "+title2)
	    .setAuthor("SCP Secret Laboratory","http://scp-sl.wdfiles.com/local--files/nav:side/scp-sl-logo.png")
	    .addField("IP:","scpmemers.xyz",true)
	    .addField("PORT:","7778",true)
	    .addField("PLAYERS:",player2,true)
	    .setColor(color2)
          message.channel.send(serverstatus2)
	  let serverstatus3 = new Discord.RichEmbed()
	    .setTitle("Shiba community #3 "+title3)
	    .setAuthor("SCP Secret Laboratory","http://scp-sl.wdfiles.com/local--files/nav:side/scp-sl-logo.png")
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
