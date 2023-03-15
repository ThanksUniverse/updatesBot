const { ApplicationCommandOptionType } = require('discord.js')

module.exports = {
   name: 'random',
   description: 'Returns a random number between two choosed numbers!',
   //devOnly: Boolean,
   //testOnly: Boolean,
   options: [
      {
         name: 'first',
         description: 'The first number',
         type: ApplicationCommandOptionType.Number,
         required: true,
      },
      {
         name: 'second',
         description: 'The second number',
         type: ApplicationCommandOptionType.Number,
         required: true,
      },
   ],

   callback: (client, interaction) => {
      const num1 = interaction.options.get('first').value
      const num2 = interaction.options.get('second').value
      let answer = Math.floor(Math.random() * (num2 - num1 + 1)) + num1;
      if (num1 > num2) {
         answer = num1;
      }
      interaction.reply(`The random number between ${num1} and ${num2} is: ${answer.toString()}`)
   }
}