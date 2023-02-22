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

        let message = args.join(" ");

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
            Miku.sendMessage(m.from, { text: `Error occurred` }, { quoted: m })
        });
		  if(err != 1){
			var gpt_reply = completion.data.choices[0].text
			Miku.sendMessage(m.from, { text: `*Chat-GPT:*\n ${gpt_reply}` }, { quoted: m })
		  }else{
			err = 0
		  }
}
}
