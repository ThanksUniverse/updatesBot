const { Schema, model } = require('mongoose');

const gameUpdateSchema = new Schema({
   name: {
      type: String,
      required: true,
   },
   guildId: {
      type: String,
      required: true,
   },
   channelId: {
      type: String,
      required: true,
   }
});

module.exports = model('GameUpdate', gameUpdateSchema);
