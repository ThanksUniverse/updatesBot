const config = require("../config.json")
const { REST, Routes, ApplicationCommandOptionType } = require('discord.js');

const commands = [
   {
      name: 'ping',
      description: 'Replies pong',
   },
   {
      name: 'random',
      description: 'Get a random number between two numbers',
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
   },
   {
      name: 'embed',
      description: 'Sends an embed',
   },
];

const rest = new REST({ version: '10' }).setToken(config.token);

(async () => {
   try {
      console.log('Registering slash commands...')
      await rest.put(
         Routes.applicationGuildCommands(config.botID, config.serverID),
         { body: commands }
      )
      console.log('Slash commands registered.')
   } catch (error) {
      console.log(`There was an error: ${error}`)
   }
})();