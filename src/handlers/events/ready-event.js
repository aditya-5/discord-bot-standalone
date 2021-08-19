import Event from "./event.js";
import CommandHandler from "../command-handler.js";
export default class extends Event{
    on = "ready";

    constructor(){
        super()
        this.commandHandler = new CommandHandler()
    }

    async invoke(){
        console.log("Bot is online")

        this.commandHandler.init();
    }
}