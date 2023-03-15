const { ApplicationCommandOptionType, PermissionFlagsBits } = require('discord.js')

module.exports = {
   name: 'clean',
   description: 'Cleans the chat.',
   // devOnly: Boolean,
   // testOnly: Boolean,
   options: [
      {
         name: 'type',
         description: 'The color of the embed',
         type: ApplicationCommandOptionType.String,
         required: true,
         choices: [
            {
               name: 'general',
               value: "general",
            },
            {
               name: 'bot',
               value: "bot",
            },
            {
               name: 'user',
               value: "user",
            },
         ]
      },
   ],
   permissionRequired: [PermissionFlagsBits.Administrator],
   botPermissions: [PermissionFlagsBits.Administrator],

   callback: async (client, interaction) => {
      const { options } = interaction;
      const type = options.getString('type');

      let messagesToDelete = [];
      if (type === 'general') {
         messagesToDelete = await interaction.channel.messages.fetch({ limit: 10 });
      } else if (type === 'bot') {
         messagesToDelete = await interaction.channel.messages.fetch({ limit: 10 })
            .then(messages => messages.filter(m => m.author.id === client.user.id));
      } else if (type === 'user') {
         messagesToDelete = await interaction.channel.messages.fetch({ limit: 10 })
            .then(messages => messages.filter(m => m.author.id === interaction.user.id));
      }


      if (messagesToDelete.size === 0) {
         return interaction.reply({ content: `No messages found to delete.`, ephemeral: true });
      }

      interaction.reply({ content: `The bot will delete 10 messages.`, ephemeral: true });
      try {
         await Promise.all(messagesToDelete.map(m => m.delete()));
      } catch (error) {
         console.error(error);
         interaction.reply({ content: `Error deleting messages.`, ephemeral: true });
      }
   }

}