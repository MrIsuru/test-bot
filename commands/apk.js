const { tlang, botpic, cmd, prefix, runtime, Config, formatp, fetchJson } = require('../lib')
const { download} = require('aptoide-scraper')
cmd({
    pattern: "apk",
    alias: ["downapk","playstore"],
    desc: "download playstore app",
    react: "📥",
    category: "downloader",
    filename: __filename,
},
async (Void, citel, text) => {
if (!text) return
try {
let result = await download(text)
 const applink = result.dllink
    const getname = result.name
    const icon = result.icon
    const lastupdate = result.lastup
    const packagename = result.package
    const size = result.size
      await Void.sendMessage(citel.chat, { 
        image: {
            url: icon,
        }, 
        caption: `
        \n || *SUMANAPALA-MD APK DOWNLOADER* ||
        \n━━━━━━━━━━━━━━━━━━
        
        \n *👝 𝙰𝙿𝙿 𝙽𝙰𝙼𝙴 :*\n${getname}
        
        \n *🎗 𝙻𝙰𝚂𝚃 𝚄𝙿𝙳𝙰𝚃𝙴 :*\n${lastupdate}
        
        \n *💳 𝙿𝙰𝙲𝙺𝙰𝙶𝙴 𝙽𝙰𝙼𝙴 :*\n${packagename}
        
        \n *🛡️ 𝙵𝙸𝙻𝙴 𝚂𝙸𝚉𝙴 :*\n${size}`,
    })
    return Void.sendMessage(citel.chat, { 
        document: {
            url: applink,
        },
        mimetype: "application/vnd.android.package-archive",
        fileName: getname,
        caption: `*• ꜱᴜᴍᴀɴᴀᴘᴀʟᴀ-ᴍᴅ •*`,
    }, {
        quoted: citel,
    });
  } catch (err) {
    console.error(err);
    citel.reply(` *❌ An error occurred while processing your request. Please try again later.* ${err}`);
  }
})
  //---------------------------------------------------------------------------
