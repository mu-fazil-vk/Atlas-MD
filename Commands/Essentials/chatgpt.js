const { Configuration, OpenAIApi } = require("openai");
require ('../../config.js')

module.exports = {
    name: "chatgpt",
    alias:["gpt"],
    desc: "To communicate with Chat-GPT",
    category: "Essentials",
    usage: `.gpt <message>`,
    react: "🍁",
    start: async (Miku, m, { text, prefix, args }) => {
		var err;

        if (!args[0])
          return Miku.sendMessage(
            m.from,
            { text: `Please provide message/question !` },
            { quoted: m }
          );

        let message = args[0];

		const configuration = new Configuration({
			apiKey: chat_gpt,
		  });
		
		  const openai = new OpenAIApi(configuration);
		
		  const completion = await openai.createCompletion({
			model: "text-davinci-003",
			prompt: message,
		  }).catch((error) => {
			err = 1;
            console.log(error);
            Miku.sendMessage(m.from, { text: `Error private / not found` }, { quoted: m })
        });
		  var gpt_reply = completion.data.choices[0].text
		  if(err != 1){
			Miku.sendMessage(m.from, { text: gpt_reply }, { quoted: m })
		  }else{
			err = 0
		  }
}
}
