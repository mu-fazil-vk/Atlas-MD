const ttt = require('google-tts-api');

module.exports = {
    name: "say",
    alias: ["speak","texttospeech","tts"],
    //desc: "Say somethong using bot.  \n\n *Provide languages as follows*\nEnglish: _en_\nMalayalam: _ml_\nArebic: _ar_",
    desc: "Say somethong using bot.",
    usage: "say <text|language>",
    react: "🍁",
    category: "Essentials",
    start: async(Miku, m,{pushName,prefix,args,text,mime}) => {
        //if(!args[0] && !m.quoted) return m.reply(`Please provide me a text to say!`);
        
        if (!text && m.quoted) {
            message = `${m.quoted ? m.quoted.msg : ''}`;
          }
          else if(args[0]){
            message = args.join(' ');
          }
          else{
            message = `Please provide me a text to say Mr/Mrs ${pushName} !`;
          }

        const texttospeechurl = ttt.getAudioUrl(message, {lang: "en", slow: false, host: "https://translate.google.com",});
        
            Miku.sendMessage(m.from, { audio: {url: texttospeechurl} ,mimetype: 'audio/mpeg' }, { quoted: m }).catch(e => {
                m.reply(`An error occurred !`);
            });
    }
}