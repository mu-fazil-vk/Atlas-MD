module.exports = {
    name: "miku",
    alias: ["Miku"],
    desc: "what do u want",
    cool:3,
    react: "🫣",
    category: "fun",
    start: async(Miku, m,{pushName}) => {
     
     const shibam = 
       "https://i.ibb.co/pJVqZNy/IMG-20230113-193233.jpg"
       
     
     let buttons = [
              { buttonId: `${prefix}help`, buttonText: { displayText: 'HELP' }, type: 1 }
,
         
              { buttonId: `${prefix}owner`, buttonText: { displayText: 'OWNER' }, type: 1 }
,
      
              { buttonId: `${prefix}loveu`, buttonText: { displayText: 'I Lᴏᴠᴇ Yᴏᴜ Mɪᴋᴜ♥️' }, type: 1 }
       
       ]
       
       let buttonMessage = {
        image: {url:shibam},
        caption: `What do you want ${pushName}senpai?🫣😜`,
        footer: `*ᴍɪᴋᴜ*`,
        buttons: buttons,
        headerType: 4
    }
    
     await client.sendMessage(m.from, buttonMessage, { quoted: m })
   
    }
}
    
