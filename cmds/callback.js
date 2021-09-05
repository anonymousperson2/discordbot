module.exports = {
    name: 'callback',
    description: 'Sends a ping to the bot. If successful, the bot will respond.',
    execute(message, args) {
        message.channel.send('`Pinging API...`').then(msg => {
            const ping = msg.createdTimestamp - message.createdTimestamp;
            msg.edit(`API ping was succesful. The response time was ${ping}ms.`);
        });
        console.log('JToH Wiki Callback Successful (callback = true)');
    }
}