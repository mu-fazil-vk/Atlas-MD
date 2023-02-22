const axios = require('axios')

module.exports = {
    name: "oppai",
    alias: ["boobs","oppais"],
    desc: "Get anime big bo*bs girls picture.",
    react: "🥵",
    category: "Weeb",
    start: async(Miku, m,{pushName,prefix}) => {
        let oppai = await axios.get('https://nekosenpai-apis.onrender.com/oppai');  

let Button = [
      {
        buttonId: `${prefix}oppai`,
        buttonText: { displayText: `>>` },
        type: 1,
      },
    ];
    let oppais = {
      image: {url:oppai.data.url},
      caption: `Do you love tits too ${pushName}... ?`,
      footer: `*${botName}*`,
      buttons: Button,
      headerType: 4,
    };
    await Miku.sendMessage(m.from, oppais, { quoted: m }).catch((err) => {
      return "Error!";
    });
}, 
};
