const { ApplicationCommandOptionType, PermissionFlagsBits } = require('discord.js')

module.exports = {
   name: 'ban',
   description: 'Bans a member from the server.',
   // devOnly: Boolean,
   // testOnly: Boolean,
   options: [
      {
         name: 'target-user',
         description: 'The user to ban',
         required: true,
         type: ApplicationCommandOptionType.Mentionable
      },
      {
         name: 'reason',
         description: 'The reason for the banning.',
         type: ApplicationCommandOptionType.String
      },
   ],
   permissionRequired: [PermissionFlagsBits.Administrator],
   botPermissions: [PermissionFlagsBits.BanMembers],

   callback: (client, interaction) => {
      interaction.reply('ban...')
   }
}