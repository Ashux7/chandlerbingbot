const { Client, IntentsBitField } = require('discord.js');
const { token } = require('./config.json');
const chandler = new Client({ 
    intents:[
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMembers,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.MessageContent,
        IntentsBitField.Flags.GuildPresences
    ]
});

if (chandler.isReady = true) {
    console.log('Chandler joined the chat!')
}
chandler.login(String(token))

