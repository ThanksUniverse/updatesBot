const { Client, Interaction } = require('discord.js');
const fetch = require('node-fetch');
const cheerio = require('cheerio');
const GameUpdate = require('../../models/gameUpdate');

module.exports = {

   /**
    * 
    * @param {Client} client 
    * @param {Interaction} interaction 
    */

   callback: async (client, interaction) => {
      const gameUpdate = 'league';
      const registeredChannels = await GameUpdate.find({ name: gameUpdate }).exec();

      try {
         const response = await fetch('https://www.leagueoflegends.com/pt-br/news/tags/patch-notes/');
         const html = await response.text();
         const $ = cheerio.load(html);

         // Get the title and link of the latest update post
         const latestPost = $('.list-news > .list-news__item:first-child');
         const title = latestPost.find('.list-news__title').text().trim();
         const link = 'https://www.leagueoflegends.com' + latestPost.find('.list-news__link').attr('href');

         // Send the latest update to all registered channels
         registeredChannels.forEach(channel => {
            client.channels.fetch(channel.channelId).then(channel => {
               channel.send(`**${gameUpdate} update**: ${title}\n${link}`);
            });
         });

         interaction.reply(`The latest ${gameUpdate} update has been sent to all registered channels.`);
      } catch (error) {
         console.log(`Error with leagueUpdate command: ${error}`);
         interaction.reply(`There was an error while fetching the latest ${gameUpdate} update.`);
      }
   },

   name: 'leagueupdate',
   description: 'Send the latest League of Legends update to all registered channels.',
};
