const Discord = require('discord.js');

module.exports = {
    name: 'reportpings',
    description: 'Gives the user the "ReportPings" role.',
    execute(message, args, Discord) {
        const reportPingsRoleGiver = message.guild.roles.cache.find(role => role.id == "883831138404143144");

        if (!message.member.roles.cache.has('786356339550715904')) {
            return message.channel.send(`${message.author} you aren't a wiki staff member dude`);
        } else if (message.member.roles.cache.has('883831138404143144')) {
            message.member.roles.remove(reportPingsRoleGiver);
            message.channel.send(`${message.author} has been removed from the Report Pings role.`);
            return;
        } else {
            message.member.roles.add(reportPingsRoleGiver);
            message.channel.send(`${message.author} has been given the Report Pings role.`);
        }
    }
}