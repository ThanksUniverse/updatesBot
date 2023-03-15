const { ApplicationCommandOptionType, EmbedBuilder } = require('discord.js')

module.exports = {
   name: 'embed',
   description: 'Build a sample embed!',
   //devOnly: Boolean,
   //testOnly: Boolean,
   options: [
      {
         name: 'title',
         description: 'The title of the embed',
         type: ApplicationCommandOptionType.String,
         required: true,
      },
      {
         name: 'description',
         description: 'The description of the embed',
         type: ApplicationCommandOptionType.String,
         required: true,
      },
      {
         name: 'color',
         description: 'The color of the embed',
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
         ]
      },
   ],

   callback: (client, interaction) => {
      const title = interaction.options.get('title').value
      const description = interaction.options.get('description').value
      const color = interaction.options.get('color').value
      const embed = new EmbedBuilder()
         .setTitle(title)
         .setDescription(description)
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