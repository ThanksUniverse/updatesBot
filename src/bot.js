const config = require("../config.json");
const { Client, GatewayIntentBits, EmbedBuilder, PermissionsBitField, Permissions, MessageEmbed, ActivityType } = require("discord.js");
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent, GatewayIntentBits.GuildMembers] });
const eventHandler = require("./handlers/eventHandler");

eventHandler(client);

/* 

client.on('messageCreate', (msg) => {
   if (msg.author.bot) {
      return;
   }
   if (msg.content === 'ping') {
      msg.reply('pong')
   }
   incrementSave()
})

client.on('interactionCreate', (interaction) => {
   if (!interaction.isChatInputCommand()) return;

   if (interaction.isChatInputCommand()) {

      const it = interaction.commandName;



   }
   incrementSave()
})
 */

client.login(config.token)