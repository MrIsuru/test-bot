const {fetchJson,cmd, tlang } = require('../lib')
const axios = require('axios')
const fetch = require('node-fetch')


cmd({
            pattern: "maths",
            category: "maths AI",
            desc: "maths solver",
            use: '<location>',
            filename: __filename,
    },
       async(Void, citel, text) => {
            if (!text) return citel.reply("example:- 20×20");
 
           let mdata = await axios.get(`https://vihangayt.me/tools/mathssolve?q=${text}`);
 
            let textw = "";

            textw += `${mdata.data}`;

            Void.sendMessage(
                citel.chat, {
                   text: textw,
                }, {
                    quoted: citel,
                }
            );

        }
    )