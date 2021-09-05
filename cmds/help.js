module.exports = {
    name: 'help',
    description: 'Shows a list of commands.',
    execute(message, args) {
        if (!args.length) {
            return message.channel.send(`dude you need to tell me what commands to show you, ${message.author}
            
%help normal - Shows all regular commands.
%help admin - Shows all administrator commands **(CURRENTLY NONE)**`);
        } else if (args[0] === 'normal') {
            return message.channel.send(`**List of Commands**
        
%callback - Sends a ping to the API. If I am online, I will respond.
%wiki - Sends a link to the JToH Wiki.
    %wiki search - Quickly search for a page by adding a second argument **(YOU MUST USE UNDERSCORES TO SUBSTITUTE FOR SPACES OR ELSE IT WILL NOT WORK)**
%report - Generates a report for vandalism, users or issues.
%emergency - Make a quick report that pings the entire staff team (ONLY SHOULD BE USED IN ACTIVE VANDALISM OR SPAM)
%help admin - Shows all administrator commands.`);
        console.log('JToH Wiki Help Command executed (executed = true)');
        } else if (args[0] === 'admin') {
            if (message.member.roles.cache.has('786356339550715904')) {
                return message.channel.send(`**List of Wiki Staff Only Commands**
%reportpings - Gives you the Report Pings role, making you get pinged for vandalism/user reports. To remove it from you, simply run the command again.
%blacklist - Blacklist a user from using the report system.
%unblacklist - Removes a report system blacklist from a user.`);
            } else {
                return message.channel.send(`${message.author} you aren't a wiki staff member dude`);
            }
        } else {
            return message.channel.send(`${message.author} buddy, ${args} isn't a valid argument`);
        }
    }
}