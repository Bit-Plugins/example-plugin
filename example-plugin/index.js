const core = require("bit/core");
const { GatewayIntentBits } = require('discord.js');

module.exports = {
    start_function: function start_function() {
        // Sends a message to the Bit Core plugin and asks it to run the logging function!
        core.log(0, "Example Plugin", true, "Example Plugin for example stuffs")
    },

    define_intents: function define_intents() {
        // Adds the MessageContent intent
        // I recommend against adding this intent unless ABSOLUTELY required
        // This intent allows the bot to see Message Content and is ABSOLUTELY dangerous
        core.add_intent(GatewayIntentBits.MessageContent)
    }
};