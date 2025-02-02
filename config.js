const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "KAVI-EXE=euhXzQya#JTwn2UO2acsHpwkVfmgxSU8VW2merfMCEnqg0A3zWQg",
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",
MODE: process.env.MODE || "public",
ALWAYS_ONLINE : process.env.ALWAYS_ONLINE || "true",
AUTO_TYPING: process.env.AUTO_TYPING || "false",
AUTO_RECORDING: process.env.AUTO_RECORDING || "true",
ANTI_CALL: process.env.ANTI_CALL || "false",
};
