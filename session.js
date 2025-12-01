//King RANUX PRO Whatsapp Bot Made By 𝓜𝓡. 𝓡𝓪𝓷𝓼𝓪𝓻𝓪 𝓓𝓮𝓿𝓷𝓪𝓽𝓱
//Whatsapp:072 688 0784
// ඔයාට හම්බ වුණ Session ID එක Put Your Session ID කියන තැනට Paste කරන්න.
// ❤️ Thank you for Using King RANUX PRO WA BOT🚀

const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "Put Your Session ID",
PORT: process.env.PORT || "8000"
};
