const { Client, Interaction, ApplicationCommandOptionType } = require('discord.js')

module.exports = {

   /**
    * @param {Client} client 
    * @param {Interaction} interaction 
    */

   callback: (client, interaction) => {
      const registerGame = interaction.options.get('game-update').value
      interaction.reply(`Registered ${registerGame}`)
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