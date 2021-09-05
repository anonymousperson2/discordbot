const Discord = require('discord.js');

const client = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES"] });

const prefix = '%';

const fs = require('fs');

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./cmds/').filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
    const command = require(`./cmds/${file}`);

    client.commands.set(command.name, command);
}

client.once('ready', () => {
    console.log('JToH Bot has logged in (loginsuccesful = true)')
});

client.on('message', message => {
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if (command === 'callback') {
        client.commands.get('callback').execute(message, args);
    } else if (command === 'wiki') {
        client.commands.get('wiki').execute(message, args);
    } else if (command === 'help') {
        client.commands.get('help').execute(message, args);
    } else if (command === 'report') {
        client.commands.get('report').execute(message, args, Discord);
    } else if (command === 'emergency') {
        client.commands.get('emergency').execute(message, args, Discord);
    } else if (command === 'reportpings') {
        client.commands.get('reportpings').execute(message, args, Discord);
    } else if (command === 'blacklist') {
        client.commands.get('blacklist').execute(message, args, Discord);
    } else if (command === 'unblacklist') {
        client.commands.get('unblacklist').execute(message, args, Discord);
    } else {
        return message.channel.send('That is not a valid command. Use `%help normal` to see a list of regular commands, and `%help admin` to see all administrator commands.');
    }
});


client.login('ODgzNTE4Mzc2ODkzMzc0NDg0.YTLGnA.3K4EfrBandXtJKTOxMGSAlFj0JE');