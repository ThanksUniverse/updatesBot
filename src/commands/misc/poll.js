const { ApplicationCommandOptionType, EmbedBuilder } = require('discord.js')

module.exports = {
   name: 'poll',
   description: 'Create a simple poll with buttons to select!',
   //devOnly: Boolean,
   //testOnly: Boolean,
   options: [
      {
         name: 'title',
         description: 'The title of the poll',
         type: ApplicationCommandOptionType.String,
         required: true,
      },
      {
         name: 'color',
         description: 'The color of the poll',
         type: ApplicationCommandOptionType.String,
         required: true,
         choices: [
            {
               name: 'red',
               value: "Red",
            },
            {
               name: 'blue',
               value: "Blue",
            },
            {
               name: 'yellow',
               value: "Yellow",
            },
            {
               name: 'orange',
               value: "Orange",
            },
            {
               name: 'black',
               value: "Black",
            },
         ]
      },
      {
         name: 'option1',
         description: 'Option 1',
         type: ApplicationCommandOptionType.String,
         required: true,
      },
      {
         name: 'option2',
         description: 'Option 2',
         type: ApplicationCommandOptionType.String,
         required: true,
      },
      {
         name: 'option3',
         description: 'Option 3',
         type: ApplicationCommandOptionType.String,
         required: false,
      },
   ],

   callback: (client, interaction) => {
      const title = interaction.options.get('title').value
      const color = interaction.options.get('color').value
      const embed = new EmbedBuilder()
         .setTitle(title)
         .setColor(color)
         .addFields(
            {
               name: 'Previous Patch:',
               value: '13.4',
               inline: true
            },
            {
               name: "Actual Patch:",
               value: '13.5',
               inline: true
            }
         )

      interaction.reply({ embeds: [embed] })
   }
}