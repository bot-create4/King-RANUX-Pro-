const { runtime } = require('../utils/functions');

module.exports = [
    {
        name: "ping",
        alias: ["speed"],
        description: "Check bot's response speed.",
        react: "📟",
        ownerOnly: false,
        execute: async (conn, mek, args, context) => {
            try {
                const { from, reply } = context;
                const startTime = Date.now();
                const message = await conn.sendMessage(from, { text: '*Pinging...*' }, { quoted: mek });
                const endTime = Date.now();
                const ping = endTime - startTime;

                await conn.sendMessage(from, { 
                    text: `*📍 Pong : ${ping}ms*`, 
                    edit: message.key 
                });
            } catch (e) {
                console.log(e);
                context.reply('*Error !!*');
            }
        }
    },
    {
        name: "jid",
        description: "Get JID of user/group/channel.",
        react: "🆔",
        ownerOnly: false,
        execute: async (conn, mek, args, context) => {
            try {
                const { from, reply } = context;
                
                // Quoted message එකක් තියෙනවද බලලා, එහෙම නැත්නම් current chat JID එක ගන්නවා
                let jid;
                if (mek.message.extendedTextMessage && mek.message.extendedTextMessage.contextInfo && mek.message.extendedTextMessage.contextInfo.participant) {
                    jid = mek.message.extendedTextMessage.contextInfo.participant;
                } else {
                    jid = from;
                }

                let msg = `*🆔 JID INFO:*

*📬 JID:* \`${jid}\``;

                return reply(msg);
            } catch (e) {
                console.log(e);
                context.reply('*Error getting JID*');
            }
        }
    },
    {
        name: "getpp",
        alias: ["pp"],
        description: "Get profile picture of a user.",
        react: "🖼️",
        ownerOnly: false,
        execute: async (conn, mek, args, context) => {
            try {
                const { from, reply } = context;
                
                // Target user සොයා ගැනීම
                let user;
                if (mek.message.extendedTextMessage && mek.message.extendedTextMessage.contextInfo && mek.message.extendedTextMessage.contextInfo.participant) {
                    user = mek.message.extendedTextMessage.contextInfo.participant;
                } else {
                    user = from;
                }

                try {
                    var ppUrl = await conn.profilePictureUrl(user, 'image');
                } catch (e) {
                    return reply("*User has no profile picture!* ❌");
                }

                await conn.sendMessage(from, { 
                    image: { url: ppUrl }, 
                    caption: `*👤 USER PROFILE PICTURE*\n\n*Target:* ${user}` 
                }, { quoted: mek });

            } catch (e) {
                console.log(e);
                reply('*Error retrieving profile picture!*');
            }
        }
    }
];
