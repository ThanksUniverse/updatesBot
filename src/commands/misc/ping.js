const incrementCounter = require("../../events/interactionCreate/incrementCounter")

module.exports = {
   name: 'ping',
   description: 'pong!',
   //devOnly: Boolean,
   //testOnly: Boolean,
   //options: Object[],

   callback: async (client, interaction) => {
      await interaction.deferReply();

      const reply = await interaction.fetchReply();

      const ping = reply.createdTimestamp - interaction.createdTimestamp;

      interaction.editReply(`pong! Client ${ping}ms && Websocket: ${client.ws.ping} ms`)
   }
}