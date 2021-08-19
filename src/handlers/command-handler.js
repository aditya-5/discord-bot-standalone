import { readdirSync } from "fs";

export default class CommandHandler{
    commandsMap = new Map();

    // constructor(){
    //     this.
    // }

    async init(){
        const fileNames = readdirSync("./src/handlers/commands/")
        for (const name of fileNames) {
            const {default:Commmand} = await import(`./commands/${name}`)
            const command = new Commmand();

            if(!command.name) continue
            this.commandsMap.set(command.name, command)
        }
        console.log(this.commandsMap)
    }

    async handle(prefix, msg){
        const words = msg.content.slice(prefix.length).split(" ")
        try{
            await this.commandsMap.get(words[0]).execute(msg, words.slice(1));
        }
        catch(error){
            await msg.reply(error.message)
        }

    }
}