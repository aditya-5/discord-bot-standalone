import {config} from "dotenv";
config({path:".env"})
import {Client} from "discord.js";

export const bot = new Client();
import EventHandler from "./handlers/event-handler.js"

new EventHandler().init();

bot.login(process.env.BOT_TOKEN)