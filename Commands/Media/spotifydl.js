const Spotify = require("../../lib/spotifyScrap.js");
const fs = require("fs");

module.exports = {
  name: "spotifydl",
  alias: ["sdl"],
  desc: "To download a song from Spotify",
  category: "Media",
  usage: `sdl <song url>`,
  react: "🍁",
  start: async (Miku, m, { text, prefix, args }) => {
    if (!args[0])
      return Miku.sendMessage(
        m.from,
        { text: `Please provide a song name to play !` },
        { quoted: m }
      );
    const songSerachTerm = args.join(" ");
    const spotify = new Spotify(songSerachTerm)
    const info = await spotify.getInfo()
	if ((info).error) {
		Miku.sendMessage(
			m.from,
			{ text: `The link you provided is not spotify link!` },
			{ quoted: m }
		  );
	}

	const bufferpotify = await spotify.download()
	
    await Miku.sendMessage(m.from,{
		audio: bufferpotify,
		mimetype: 'audio/mpeg',
		
	},{quoted:m})
  },
};
