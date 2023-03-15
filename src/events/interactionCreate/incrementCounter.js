const fs = require('fs');
const dataJSON = fs.readFileSync('./data.json');
const { ActivityType } = require("discord.js");
const data = JSON.parse(dataJSON);
let commandCounter = data.commandCounter
const lastUser = data.lastUser

module.exports = async (client) => {
   commandCounter++;
   data.commandCounter = commandCounter;
   fs.writeFileSync('./data.json', JSON.stringify(data))
   client.user.setActivity(`in ${client.guilds.cache.size} servers | ${commandCounter} commands executed`);
};