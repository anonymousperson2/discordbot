const Discord = require('discord.js');

module.exports = {
    name: 'unblacklist',
    description: 'Un-Blacklists a user from using the report system.',
    execute(message, args, Discord) {
        const targetunBlacklist = message.mentions.users.first();

        if (!message.member.roles.cache.has('786356339550715904') && !message.member.roles.cache.has('823656790318252070')) {
            return message.channel.send(`${message.author} you need to be a server helper or wiki staff member to use that command stupid`);
        }

        if (targetunBlacklist) {
            let blacklistedRole = message.guild.roles.cache.find(role => role.id === '883830761097162752');

            let userToUnBlacklist = message.guild.members.cache.get(targetunBlacklist.id);

            if (!userToUnBlacklist.roles.cache.has('883830761097162752')) {
                return message.channel.send(`${targetunBlacklist} isn't even blacklisted dude`);
            }

            userToUnBlacklist.roles.remove(blacklistedRole);
            message.channel.send(`${targetunBlacklist} has been removed from the report system blacklist.`);
        } else {
            return message.channel.send(`${message.author} try again, but actually mention a valid person to unblacklist.`);
        }
    }
}