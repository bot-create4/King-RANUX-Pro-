const os = require('os')
const { runtime } = require('../utils/functions')

module.exports = {
    name: "alive",
    alias: ["status", "info"],
    description: "Check bot status",
    react: "👋",
    ownerOnly: false,
    groupOnly: false,
    adminOnly: false,
    botAdmin: false,
    async execute(conn, mek, args, context) {
        try {
            const { from, pushname, reply } = context

            // Bot status text eka lassanata hadamu
            const text = `
👋 *Hi ${pushname}, I am Alive Now!*

Use this command to check system status.

🕓 *Uptime:* ${runtime(process.uptime())}
📟 *Ram:* ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB
💻 *HostName:* ${os.hostname()}

*🤖 KING-RANUX-PRO*
`
            // Oya dunna image URL eka mekata add kara
            await conn.sendMessage(from, { 
                image: { url: "https://raw.githubusercontent.com/rasara4/dp-project-1/refs/heads/main/images/1762859117583.jpg" }, 
                caption: text 
            }, { quoted: mek })

        } catch (e) {
            console.log(e)
            reply(`Error: ${e}`)
        }
    }
}
