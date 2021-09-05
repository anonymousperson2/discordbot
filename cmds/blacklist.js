const Discord = require('discord.js');
const ms = require('ms');

module.exports = {
    name: 'blacklist',
    description: 'Blacklists a user from using the report system.',
    execute(message, args, Discord) {
        const targetBlacklist = message.mentions.users.first();

        if (!message.member.roles.cache.has('786356339550715904') && !message.member.roles.cache.has('823656790318252070')) {
            return message.channel.send(`${message.author} you need to be a server helper or wiki staff member to use that command stupid`);
        }

        if (targetBlacklist) {
            let blacklistedRole = message.guild.roles.cache.find(role => role.id === '883830761097162752');

            let userToBlacklist = message.guild.members.cache.get(targetBlacklist.id);

            if (userToBlacklist.roles.cache.has('883830761097162752')) {
                return message.channel.send(`${targetBlacklist} is already blacklisted!`);
            }

            if (!args[1]) {
                userToBlacklist.roles.add(blacklistedRole);
                message.channel.send(`${targetBlacklist} has been blacklisted from using the report system.`);
                return;
            }

            userToBlacklist.roles.add(blacklistedRole);
            message.channel.send(`${targetBlacklist} has been blacklisted from using the report system for ${ms(ms(args[1]))}.`);

            setTimeout(function () {
                userToBlacklist.roles.remove(blacklistedRole);
            }, ms(args[1]));
        } else {
            return message.channel.send(`${message.author} try again, but actually mention a valid person to blacklist.
            
%blacklist <user> <optional time>`);
        }
    }
}