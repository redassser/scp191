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
  if (command === "s") {
      console.log(ip);
  }
   if (command === "ss") {

	   	     request(`https://kigen.co/scpsl/getinfo.php?ip=${ip}&port=${port1}`, function(err, resp, html) {
        if (!err){
          var $ = cheerio.load(html); 
          
            if (html === '{"error":"Server not found"}') {
				 message.channel.send({"embed": {
    "color": 9245716,
    "title": "JackInTheBoxRunaway Community #1 [OFFLINE]",
     "author": {
      "name": "SCP Secret Laboratory",
      "icon_url": "http://scp-sl.wdfiles.com/local--files/nav:side/scp-sl-logo.png"
     },
        fields: [{
          name: "IP:",
          value: `${ip}`,
          inline: true
        },
        {
          name: "PORT:",
          value: `${port1}`,
          inline: true
        },
        {
          name: "PLAYERS:",
          value: `N/A`,
          inline: true
        }
          ],
      }
     });  
   }
   else {
	   var json = JSON.parse(html);
     
     if ("error" in json) {
     console.log("wtf0");
     } else {
          var playerCount = json.players;
      message.channel.send({"embed": {
    "color": 3498293,
    "title": "JackInTheBoxRunaway Community #1",
     "author": {
      "name": "SCP Secret Laboratory",
      "icon_url": "http://scp-sl.wdfiles.com/local--files/nav:side/scp-sl-logo.png"
     },
        fields: [{
          name: "IP:",
          value: `${ip}`,
          inline: true
        },
        {
          name: "PORT:",
          value: `${port1}`,
          inline: true
        },
        {
          name: "PLAYERS:",
          value: `${playerCount}`,
          inline: true
        }
          ],
      }
     });       
     }
   }
		}
		 });
		 	     request(`https://kigen.co/scpsl/getinfo.php?ip=${ip}&port=${port2}`, function(err, resp, html) {
        if (!err){
          var $ = cheerio.load(html); 
          
            if (html === '{"error":"Server not found"}') {
				 message.channel.send({"embed": {
    "color": 9245716,
    "title": "JackInTheBoxRunaway Community #2 [OFFLINE]",
     "author": {
      "name": "SCP Secret Laboratory",
      "icon_url": "http://scp-sl.wdfiles.com/local--files/nav:side/scp-sl-logo.png"
     },
        fields: [{
          name: "IP:",
          value: `${ip}`,
          inline: true
        },
        {
          name: "PORT:",
          value: `${port2}`,
          inline: true
        },
        {
          name: "PLAYERS:",
          value: `N/A`,
          inline: true
        }
          ],
      }
     });  
   }
   else {
	   var json = JSON.parse(html);
     
     if ("error" in json) {
     console.log("wtf0");
     } else {
          var playerCount = json.players;
           message.channel.send({"embed": {
    "color": 3498293,
    "title": "JackInTheBoxRunaway Community #2",
     "author": {
      "name": "SCP Secret Laboratory",
      "icon_url": "http://scp-sl.wdfiles.com/local--files/nav:side/scp-sl-logo.png"
     },
        fields: [{
          name: "IP:",
          value: `${ip}`,
          inline: true
        },
        {
          name: "PORT:",
          value: `${port2}`,
          inline: true
        },
        {
          name: "PLAYERS:",
          value: `${playerCount}`,
          inline: true
        }
          ],
      }
     });       
     }
   }
		}
		 });
		 	     request(`https://kigen.co/scpsl/getinfo.php?ip=${ip}&port=${port3}`, function(err, resp, html) {
        if (!err){
          var $ = cheerio.load(html); 
          
            if (html === '{"error":"Server not found"}') {
				 message.channel.send({"embed": {
    "color": 9245716,
     timestamp: new Date(),
    "title": "JackInTheBoxRunaway Community #3 [OFFLINE]",
     "author": {
      "name": "SCP Secret Laboratory",
      "icon_url": "http://scp-sl.wdfiles.com/local--files/nav:side/scp-sl-logo.png"
     },
        fields: [{
          name: "IP:",
          value: `${ip}`,
          inline: true
        },
        {
          name: "PORT:",
          value: `${port3}`,
          inline: true
        },
        {
          name: "PLAYERS:",
          value: `N/A`,
          inline: true
        }
          ],
      }
     });  
   }
   else {
	   var json = JSON.parse(html);
     
     if ("error" in json) {
     console.log("wtf0");
     } else {
          var playerCount = json.players;
            message.channel.send({"embed": {
    "color": 3498293,
    timestamp: new Date(),
    "title": "JackInTheBoxRunaway Community #3",
     "author": {
      "name": "SCP Secret Laboratory",
      "icon_url": "http://scp-sl.wdfiles.com/local--files/nav:side/scp-sl-logo.png"
     },
        fields: [{
          name: "IP:",
          value: `${ip}`,
          inline: true
        },
        {
          name: "PORT:",
          value: `${port3}`,
          inline: true
        },
        {
          name: "PLAYERS:",
          value: `${playerCount}`,
          inline: true
        }
          ],
      }
     });       
     }
   }
		}
		 });
   }
});
client.login(process.env.BOT_TOKEN);
