const { Client, Interaction, ApplicationCommandOptionType } = require('discord.js')
const GameUpdate = require('../../models/gameUpdate')

module.exports = {

   /**
    * @param {Client} client 
    * @param {Interaction} interaction 
    */

   callback: async (client, interaction) => {
      const registerGame = interaction.options.get('game-update').value
      const guild = interaction.guild.id;
      const channel = interaction.channel.id;
      const channelName = interaction.channel.name;

      if (!interaction.inGuild()) {
         interaction.reply(`You can only use this command inside a server.`);
         return;
      }

      try {
         let gameUpdate = await GameUpdate.findOne({ name: registerGame });

         if (!gameUpdate) {
            gameUpdate = new GameUpdate({
               name: registerGame,
               guildId: guild,
               channelId: channel,
            });
         } else {
            if (!gameUpdate.guildId.includes(guild)) {
               gameUpdate.guildId.push(guild)
            }
         }

         await gameUpdate.save();
         interaction.reply(`This channel (${channelName}) has been registered to receive ${registerGame} update notifications.`);
      } catch (error) {
         console.log(`Error with registerGameSystem ${error}`)
      }
   },

   name: 'register',
   description: 'Register to Game Updates!',
   options: [
      {
         name: 'game-update',
         description: 'Register to some game updates.',
         type: ApplicationCommandOptionType.String,
         required: true,
         choices: [
            {
               name: 'League of Legends',
               value: 'league',
            },
            {
               name: 'Valorant',
               value: 'valorant',
            },
         ]
      },
   ],
}