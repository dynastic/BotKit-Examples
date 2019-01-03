import Application, { GroupManager, Essentials } from "dd-botkit";
import { Configuration } from "./Config";
import { GuildPermissionSet } from "./database/entities/GuildPermissionSet";
import { connect } from "./database";

export const app = new Application({
    token: Configuration.Bot.token,
    commandPrefix: Configuration.Bot.prefix,
    superuserCheck: id => Configuration.Bot.superusers.includes(id),
    permissionsEntity: GuildPermissionSet,
    commandDirectory: __dirname + "/commands"
});

app.init()
   .then(() => connect())
   .then(() => app.commandSystem.loadCommands(GroupManager))
   .then(() => app.commandSystem.loadCommands(Essentials));