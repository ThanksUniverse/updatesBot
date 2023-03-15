const { ApplicationCommandOptionType } = require('discord.js')

module.exports = {
   name: 'r',
   description: 'Gets a random number with max number that you defined or 100.',
   // devOnly: Boolean,
   // testOnly: Boolean,
   options: [
      {
         name: 'maximum-number',
         description: 'The maximum number the range will get',
         required: false,
         type: ApplicationCommandOptionType.Number
      },
   ],

   callback: (client, interaction) => {
      let maxRange = interaction.options.get('maximum-number')?.value
      if (!maxRange) {
         maxRange = 100;
      }
      interaction.reply(`The random number between 1 and ${maxRange} is: ${String(Math.floor(Math.random() * maxRange) + 1)}`);
   }
}