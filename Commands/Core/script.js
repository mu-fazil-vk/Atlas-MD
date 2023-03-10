const axios = require('axios')
const fs = require('fs')

module.exports = {
    name: "script",
    alias: ["repo","sc","sourcecode"],
    desc: "Say hello to bot.",
    react: "š",
    category: "Core",
    start: async(Miku, m,{pushName,prefix}) => {
        let picURL = fs.readFileSync('./Page/BG.jpg')
        //let repoInfo = await axios.get('https://api.github.com/repos/mu-fazil-vk/Atlas-MD')
        //let repo = repoInfo.data
        //let txt = `      š§£ *${botName}'s Script* š§£\n\n*š Total Forks:* ${repo.forks_count}\n*ā­ Total Stars:* ${repo.stargazers_count}\n*š License:* ${repo.license.name}\n*š Repo Size:* ${(repo.size/1024).toFixed(2)} MB\n*š Last Updated:* ${repo.updated_at}\n\n*š Repo Link:* ${repo.html_url}\n\nā Dont forget to give a Star ā­ to the repo. It's made with restless harkwork by *Fazil vk*. ā\n\n*Ā©ļø Fazil vk- 2023*`
        let txt = `      š§£ *${botName}'s Script* š§£\n\n*Contact Fazil:* _https://instagram.com/fazil.v.k_\n\n*Ā©ļø Fazil vk- 2023*`
        await Miku.sendMessage(m.from,{image:picURL, caption:txt},{quoted:m});
    }
}