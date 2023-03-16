const { Client, Interaction, EmbedBuilder } = require('discord.js')
const items = [
   { name: 'Pedro', price: '100' },
   { name: 'Pedro2', price: '200' },
   { name: 'Pedro3', price: '300' },
];


module.exports = {
   /**
    * @param {Client} client 
    * @param {Interaction} interaction 
    */

   callback: (client, interaction) => {
      const title = `Shop`;
      const description = `List with items that you can buy using your balance '/balance'`;
      const color = "#FFFF00";
      const embed = new EmbedBuilder()
         .setTitle(title)
         .setDescription(description)
         .setColor(color);

      items.forEach(item => {
         embed.addFields(
            { name: `Product: ${item.name}`, value: `Price: ${item.price} Pedro Coins.`}
         );
      });

      interaction.reply({ embeds: [embed] });
   },

   name: 'shop',
   description: 'Shows you the shop items and the prices'
}