const Spotify = require("../../lib/spotifyScrap.js");
const fs = require("fs");

module.exports = {
  name: "spotify",
  alias: ["splay"],
  desc: "To play a song from Spotify",
  category: "Media",
  usage: `${prefix}spotify <song name>`,
  react: "🍁",
  start: async (Miku, m, { text, prefix, args }) => {
	var themeemoji = '🍁'
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
	const { name, artists, album_name, release_date, cover_url } = info
	const details = `${themeemoji} *Title:* ${name || ''}\n${themeemoji} *Artists:* ${(artists || []).join(
		','
	)}\n${themeemoji} *Album:* ${album_name}\n${themeemoji} *Release Date:* ${release_date || ''}\n\n`
	
    let buttons = [
      {
        buttonId: `${prefix}spotifydl ${songSerachTerm}`,
        buttonText: { displayText: "♫ Download" },
        type: 1,
      },
    ];
    let buttonMessage = {
      image: { url: cover_url },
      caption: details,
      footer: `*${botName}*`,
      buttons: buttons,
      headerType: 4,
    };
    Miku.sendMessage(m.from, buttonMessage, { quoted: m });
  },
};
