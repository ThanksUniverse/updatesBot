const { Client, Interaction, PermissionFlagsBits } = require('discord.js')
const AutoRole = require('../../models/autoRole')

module.exports = {

   /**
    * @param {Client} client 
    * @param {Interaction} interaction 
    */

   callback: async (client, interaction) => {
      try {
         await interaction.deferReply();

         if (!(await AutoRole.exists({ guildId: interaction.guild.id }))) {
            interaction.editReply(`Auto role has not been configured for this server. Use '/autorole-configure' to set it up.`);
            return;
         }

         await AutoRole.findOneAndDelete({ guildId: interaction.guild.id });
         interaction.editReply(`Auto role has been disabled for this server. Use '/autorole-configure' to set it up.`)
      } catch (error) {
         console.log(`There was an error in autorole-disable ${error}`)
      }
   },

   name: 'autorole-disable',
   description: 'Disable auto-role in this server',
   permissionsRequired: [ PermissionFlagsBits.Administrator ],
}