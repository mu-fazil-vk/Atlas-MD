module.exports = {
    name: "support",
    alias: ["supportgc"],
    desc: "Sends support chat link.",
    cool:3,
    react: "🍁",
    category: "Core",
    start: async(Miku, m,{pushName}) => {
        m.reply(`Check your DM *${pushName}*!\n\nI have sent you support chat link personally.`)
        let botpic = botImage1
        let txt = `      🧣 *Support Chat* 🧣\n\n*${botName}* is an open source project, and we are always happy to help you.\n\n*Link:* _https://instagram.com/fazil.v.k_\n\n*Note:* Please don't spam in the chat, and also follow me. Ask for help in *chat*.\n\n*Thanks for using Atlas.*`
        await Miku.sendMessage(m.sender,{image:{url:botpic}, caption:txt},{quoted:m})
    }
}