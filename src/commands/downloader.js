const { fetchJson } = require('../utils/functions');

// ඔයාගේ ලෝගෝ එක
const logoUrl = 'https://raw.githubusercontent.com/rasara4/dp-project-1/refs/heads/main/images/1762859117583.jpg';

module.exports = {
    name: "downurl",
    alias: ["durl", "direct"],
    description: "Download file from direct url.",
    react: "⬇️",
    ownerOnly: false,
    execute: async (conn, mek, args, context) => {
        try {
            const { from, q, reply } = context;

            if (!q) return reply('*Please give me a direct url!* 🔗');

            // ලස්සන Message එක
            let msg = `*📂 DIRECT LINK DOWNLOADER*

*🔗 Url:* ${q}

*⬇️ Downloading your file...*
*Please wait a moment.*
`;

            // 1. Image එක සහ විස්තරය යවනවා
            await conn.sendMessage(from, { 
                image: { url: logoUrl }, 
                caption: msg 
            }, { quoted: mek });

            // 2. File එක Document එකක් විදියට යවනවා
            await conn.sendMessage(from, { 
                document: { url: q }, 
                mimetype: "application/octet-stream", 
                fileName: "Ranux-Download.bin",
                caption: "*✅ Download Completed! | KING-RANUX-PRO*" 
            }, { quoted: mek });

        } catch (e) {
            console.log(e);
            reply('*Error! Please check the URL and try again.* ❌');
        }
    }
};
