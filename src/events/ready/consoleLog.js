const fs = require('fs');
const dataJSON = fs.readFileSync('./data.json');
const { ActivityType } = require("discord.js");
const data = JSON.parse(dataJSON);
let commandCounter = data.commandCounter
const lastUser = data.lastUser

module.exports = (client) => {
   isOnline(client)
};

function incrementSave(c) {
   commandCounter++;
   data.commandCounter = commandCounter;
   fs.writeFileSync('./data.json', JSON.stringify(data))
   client.user.setActivity(`in ${client.guilds.cache.size} servers | ${commandCounter} commands executed`);
}

function isOnline(client) {
   console.log(`${client.user.tag} has logged in, with ${client.users.cache.size} users in ${client.channels.cache.size} channels inside ${client.guilds.cache.size} servers.`);
   client.user.setActivity({
      name: `in ${client.guilds.cache.size} servers | ${commandCounter} commands executed`,
      type: ActivityType.Streaming,
      url: 'https://www.youtube.com/watch?v=CdtDpnhNjFs&ab_channel=LOLTIME',
   })
}