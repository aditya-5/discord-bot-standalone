export default class{
    name = "ping";

    async execute(msg){
        await msg.reply("PONG")
    }
}