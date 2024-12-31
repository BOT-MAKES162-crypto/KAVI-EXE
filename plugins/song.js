const {cmd , commands} = require('../command')
       const {runtime, fetchJson} = require('../lib/functions')
       const config = require('../config')
       const yts = require('yt-search')
        cmd({ 
	pattern: "song2", 
	desc: "Download songs", 
	category: "download", 
	filename: __filename }, 
    async (conn, mek, m, { from, q, reply }) => { 
	    try { 
		    if (!q) { 
	    await conn.sendPresenceUpdate('recording', from); 
			    await conn.sendMessage(from, { audio: { url: 'https://github.com/themiyadilann/DilaMD-Media/raw/main/voice/song.mp3' }, mimetype: 'audio/mpeg', ptt: true }, { quoted: mek }); return; } 
		    const search = await yts(q); 
		    const data1 = search.videos[0]; 
		    const url = data1.url; 
		    let desc = `> VAJIRA MD YTDL\n\n🎶 *𝗧𝗶𝘁𝗹𝗲*: _${data.title}_\n👤 *𝗖𝗵𝗮𝗻𝗻𝗲𝗹*: _${data.author.name}_\n📝 *𝗗𝗲𝘀𝗰𝗿𝗶𝗽𝘁𝗶𝗼𝗻*: _${data.description}_\n⏳ *𝗧𝗶𝗺𝗲*: _${data.timestamp}_\n⏱️ *𝗔𝗴𝗼*: _${data.ago}_\n👁️‍🗨️ *𝗩𝗶𝗲𝘄𝘀*: _${formatViews(data.views)}_\n🔗 *𝗟𝗶𝗻𝗸*: ${url}`; 
		    await conn.sendPresenceUpdate('typing', from); 
		    await conn.sendMessage(from, { image: { url: data.thumbnail }, caption: desc }, { quoted: mek }); 
		    const data = axios fetchJson('https://apitest1-f7dcf17bd59b.herokuapp.com/download/ytmp3?url=${q}')
		    await conn.sendPresenceUpdate('recording', from); 
		    await conn.sendMessage(from, { audio: { url: result.dl_link }, mimetype: "audio/mpeg" }, { quoted: mek }); 
		    await conn.sendMessage(from, { document: { url: result.dl_link }, mimetype: "audio/mpeg", fileName: `${data.title}.mp3`, caption: "💻 *VAJIRA MD YTDL*" }, { quoted: mek }); 
	    } catch (e) { 
		    console.log(e); 
		    reply(`Error: ${e.message}`); 
	    } });
