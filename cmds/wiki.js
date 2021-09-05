module.exports = {
    name: 'wiki',
    description: 'A quick link to the JToH Wiki.',
    execute(message, args) {
        if (!args.length) {
            message.channel.send('https://jtoh.fandom.com/wiki/');
            console.log('JToH Wikilink Command Executed (executed = true)');
        } else if (args[0] === 'search') {
            return message.channel.send(`https://jtoh.fandom.com/wiki/${args[1]}`);
        }
    }
}