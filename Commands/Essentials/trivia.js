const axios = require("axios");

module.exports = {
  name: "trivia",
  alias: ["question"],
  desc: "To get some question answers.",
  usage: "question easy/medium/hard",
  react: "š",
  category: "Essentials",
  start: async (Miku, m, { pushName, prefix, args, text }) => {
    if (!args[0])
      return m.reply(
        `Please use this command like this: ${prefix}question easy/medium/hard`
      );
    const query = args.join(" ");
    await axios
      .get(
        `https://opentdb.com/api.php?amount=1&difficulty=${query}&type=multiple`
      )
      .then((response) => {
        const text = `            *ć  Question Answers  ć*\n\nš  *Category:* ${response.data.results[0].category}\nā  *Difficulty:* ${response.data.results[0].difficulty}\n\nš  *Question:* ${response.data.results[0].question}\n\nš  *Answer:* ${response.data.results[0].correct_answer}\n `;

        let buttons = [
          {
            buttonId: `${prefix}trivia ${query}`,
            buttonText: { displayText: `Next ${query} question` },
            type: 1,
          },
        ];

        let buttonMessage = {
          image: { url: botImage3 },
          caption: text,
          footer: `*${botName}*`,
          buttons: buttons,
          headerType: 4,
        };

        Miku.sendMessage(m.from, buttonMessage, { quoted: m });
      })
      .catch((err) => {
        m.reply(
          `Please use this command like this: ${prefix}question easy/medium/hard`
        );
      });
  },
};