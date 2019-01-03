import { Command } from "dd-botkit";
import { GuildMember, Message } from "discord.js";

export const ExampleCommand: Command = {
    opts: {
        name: "example",
        usage: {
            description: "An example command",
            args: [
                {
                    name: "member",
                    type: "member",
                    description: "The member to query (takes a tag, ID, or their nick/display name)",
                    required: true
                },
                {
                    name: "message",
                    type: "message",
                    description: "The message to query (put an ID!)",
                    required: true
                }
            ]
        }
    },
    handler: async message => {
        const [ member, msg ] = message.args as [ GuildMember, Message ];

        await message.reply(`Member name: ${member.displayName}\nMessage content: \`${msg.content}\``);
    }
}