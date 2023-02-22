

require ('./config.js')
const { round } = require('mathjs');
const { Configuration, OpenAIApi } = require("openai");

	const configuration = new Configuration({
  apiKey: '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',
});

const openai = new OpenAIApi(configuration);

var answer =

var runPrompt = async (text) => {
  const prompt = text;

  const response = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: prompt,
    max_tokens: 700,
    temperature: 0.7,
  });

  answer = response.data.choices[0].text.trim()
}
runPrompt("write a story about cat");
console.log(answer)
