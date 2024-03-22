const { cmd, fetchJson } = require('../lib');

cmd(
    {
        pattern: "fb",
        alias: ['facebook'],
        category:"downloader",
        react: "📽️",
        filename: __filename
    },
    async (Void, citel, text) => {
        try {
            if (!text) {
                citel.reply("*Please provide a valid URL* ✏️.");
                return;
            }

            const shan = await fetchJson(`https://kaveesha-sithum-api.cyclic.cloud/fbdl?url=${text}`);

            if (!shan.result || !shan.result.hd) {
                citel.reply("Failed to fetch video URL or HD link ❌.");
                return;
            }
            
            await Void.sendMessage(
                citel.chat,
                {
                    video: { url: shan.result.hd },
                    
                    caption:'*• ꜱᴜᴍᴀɴᴀᴘᴀʟᴀ-ᴍᴅ •*'
                },
                { quoted: citel }
            );

        } catch (error) {
            citel.reply("An error occurred: " + error.message);
        }
    }
);

//----------------------------------------------------------------------------------------// 
cmd({

            pattern: "fbs",

            desc: "fb down",

            react: "🎶",

            category: "downloader"

        },

        async(Void, citel, text) => {

            if (!text) return

const fbdls = await fetchJson(`https://api.botcahx.eu.org/api/dowloader/fbdown4?url=${text}&apikey=afYO6dXO}`)

const videolink = fbdls.result.audio

            citel.reply (`*Hello ${citel.pushName} I Am Finding Your Facebook Audio*`);

       return Void.sendMessage(citel.chat, {

                audio: {

                    url: videolink ,

                },

                mimetype: "audio/mpeg",

                fileName: `prabath-md-fb-song-downloader`,

            }, {

                quoted: citel,

            });

        }

    )
